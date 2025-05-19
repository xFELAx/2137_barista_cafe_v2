// Game script with marketing elements and gamification
document.addEventListener('DOMContentLoaded', function() {
    const gameContainer = document.getElementById('coffee-game');
    const cup = document.getElementById('cup');
    const startButton = document.getElementById('start-button');
    const resetButton = document.getElementById('reset-button');
    const scoreDisplay = document.getElementById('score-display');
    const rewardDisplay = document.getElementById('reward-display');
    const levelDisplay = document.getElementById('level-display');
    const progressBar = document.getElementById('progress-bar');
    const productAdsContainer = document.getElementById('product-ads');
    const externalProductAdsContainer = document.getElementById('external-product-ads'); // Get the new container
      // Marketing elements - Coffee products for in-game ads with images
    const coffeeProducts = [
      {
        name: "Green Tea",
        price: "7.50 zł",
        description: "Refreshing and energizing",
        image: "images/green_tean.webp"
      },
      {
        name: "Latte",
        price: "12.50 zł",
        description: "Perfect blend of espresso and steamed milk",
        image: "images/latte.webp"
      },
      {
        name: "White Coffee",
        price: "5.90 zł",
        description: "Smooth and creamy",
        image: "images/White_Coffee.jpg"
      },
      {
        name: "Caramel Macchiato",
        price: "12 zł",
        description: "Sweet caramel with strong espresso",
        image: "images/caramel_macchiato.jpg"
      },      {
        name: "Chocolate Milk",
        price: "5.50 zł",
        description: "Rich and creamy chocolate drink",
        image: "images/chocolate_milk.jpg"
      },
    ];
    
    let score = 0;
    let level = 1;
    let gameInterval;
    let gameActive = false;
    let cupPosition = 50; // percentage
    let specialBeansCollected = 0;
    let beansMissedInARow = 0;
    let beansCollectedInARow = 0;
    let achievements = {
        beginner: false,
        amateur: false,
        professional: false,
        master: false,
        perfect: false
    };
    
    // Set up cup movement
    gameContainer.addEventListener('mousemove', function(e) {
        if (gameActive) {
            const gameRect = gameContainer.getBoundingClientRect();
            const relativeX = e.clientX - gameRect.left;
            cupPosition = (relativeX / gameRect.width) * 100;
            
            // Constrain cup to game boundaries
            if (cupPosition < 5) cupPosition = 5;
            if (cupPosition > 95) cupPosition = 95;
            
            cup.style.left = `${cupPosition}%`;
        }
    });
    
    // For touch devices
    gameContainer.addEventListener('touchmove', function(e) {
        if (gameActive) {
            e.preventDefault();
            const gameRect = gameContainer.getBoundingClientRect();
            const touch = e.touches[0];
            const relativeX = touch.clientX - gameRect.left;
            cupPosition = (relativeX / gameRect.width) * 100;
            
            // Constrain cup to game boundaries
            if (cupPosition < 5) cupPosition = 5;
            if (cupPosition > 95) cupPosition = 95;
            
            cup.style.left = `${cupPosition}%`;
        }
    });
    
    function createBean() {
        const isSpecial = Math.random() < 0.15; // 15% chance for special bean
        const bean = document.createElement('div');
        bean.classList.add(isSpecial ? 'special-bean' : 'coffee-bean');
        
        // Random position
        const position = Math.random() * 90 + 5; // 5-95%
        bean.style.left = `${position}%`;
        bean.style.top = '0';
        
        gameContainer.appendChild(bean);
        
        // Animate bean falling
        let topPos = 0;
        const fallSpeed = Math.random() * (2 + level) + 1; // Speed increases with level
        
        const fallInterval = setInterval(function() {
            topPos += fallSpeed;
            bean.style.top = `${topPos}px`;
            
            // Check if bean hit the cup
            const beanRect = bean.getBoundingClientRect();
            const cupRect = cup.getBoundingClientRect();
            
            if (
                beanRect.bottom >= cupRect.top &&
                beanRect.right >= cupRect.left &&
                beanRect.left <= cupRect.right &&
                beanRect.top <= cupRect.bottom
            ) {
                // Bean caught!
                clearInterval(fallInterval);
                bean.remove();
                
                if (isSpecial) {
                    score += 30;
                    specialBeansCollected++;
                    showFloatingText('+30', position);
                    
                    // Show random product ad when catching special bean
                    showProductAd();
                } else {
                    score += 10;
                    showFloatingText('+10', position);
                }
                  scoreDisplay.textContent = `Score: ${score}`;
                beansCollectedInARow++;
                beansMissedInARow = 0;
                  // Update progress
                updateProgress();
                
                // Always check achievements after updating score
                checkAchievements();
                
                // Check for level up
                if (score >= level * 100) {
                    levelUp();
                }
            }                // Check if bean fell off screen
            if (topPos > gameContainer.offsetHeight) {
                clearInterval(fallInterval);
                bean.remove();
                beansCollectedInARow = 0;
                // Only increment beansMissedInARow for normal beans
                if (!isSpecial) {
                    beansMissedInARow++;
                    // Debug log for game over
                    console.log('Missed a normal bean. beansMissedInARow:', beansMissedInARow);
                    if (beansMissedInARow >= 5 && gameActive) {
                        // Only call game over if the game is still active
                        gameOver();
                    }
                }
            }
        }, 50);
    }
    
    function showFloatingText(text, position) {
        const floatingText = document.createElement('div');
        floatingText.textContent = text;
        floatingText.style.position = 'absolute';
        floatingText.style.left = `${position}%`;
        floatingText.style.top = '50%';
        floatingText.style.color = text === '+30' ? 'gold' : 'white';
        floatingText.style.fontWeight = 'bold';
        floatingText.style.textShadow = '0 0 5px rgba(0,0,0,0.5)';
        floatingText.style.pointerEvents = 'none';
        floatingText.style.animation = 'floatUp 1s forwards';
        
        // Add animation style if not already in document
        if (!document.getElementById('float-animation')) {
            const style = document.createElement('style');
            style.id = 'float-animation';
            style.textContent = `
                @keyframes floatUp {
                    0% { opacity: 1; transform: translateY(0); }
                    100% { opacity: 0; transform: translateY(-50px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        gameContainer.appendChild(floatingText);
        
        // Remove after animation completes
        setTimeout(() => {
            if (floatingText.parentNode) {
                floatingText.parentNode.removeChild(floatingText);
            }
        }, 1000);
    }    // Store the current active product ad
    let currentProductAd = null;
    // Store recent ads to manage positioning of multiple ads
    let activeAds = [];
      function showProductAd() {
        // Only show one ad at a time - remove any existing ads first
        if (activeAds.length > 0) {
            // Remove all existing ads
            activeAds.forEach(existingAd => {
                if (existingAd && existingAd.parentNode) {
                    existingAd.parentNode.removeChild(existingAd);
                }
            });
            // Clear the active ads array
            activeAds = [];
        }
        
        const product = coffeeProducts[Math.floor(Math.random() * coffeeProducts.length)];
        const ad = document.createElement('div');
        ad.className = 'product-ad';
        
        ad.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="max-width: 100%; height: auto; margin-bottom: 10px; border-radius: 4px;">
            <strong>${product.name}</strong>
            <div>${product.price}</div>
            <small>${product.description}</small>
            <button class="ad-close-btn">×</button>
        `;
        
        // Add cursor pointer to show it's clickable
        ad.style.cursor = 'pointer';
        
        // Make ads smaller based on screen size
        const isMobile = window.innerWidth <= 768;
        
        // Set size based on device
        if (isMobile) {
            // Much smaller for mobile - reduce size significantly
            ad.style.width = '120px';  // Reduced from 150px
            ad.style.padding = '6px';  // Reduced from 8px
            ad.style.fontSize = '0.7rem'; // Smaller font
            ad.style.opacity = '0.8'; // Slightly more transparent
        } else {
            // Default size for desktop
            ad.style.width = '220px';
            ad.style.padding = '12px';
        }
        
        // Add directly to document body to position as fixed popup in corner
        document.body.appendChild(ad);
        
        // Position the ad
        if (isMobile) {
            // Position higher and to the side on mobile to not cover the game
            ad.style.bottom = '100px';
            ad.style.right = '5px'; // Closer to edge on mobile
        } else {
            // Normal position for desktop
            ad.style.bottom = '20px';
            ad.style.right = '20px';
        }
        
        // Add to active ads array
        activeAds.push(ad);
        
        // Make close button work
        const closeBtn = ad.querySelector('.ad-close-btn');
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '5px';
        closeBtn.style.right = '5px';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '18px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#70461e';
        
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent parent click
            removeAd(ad);
        });
        
        // Make ad clickable
        ad.addEventListener('click', function() {
            // Simulate going to a product page
            alert(`You clicked on ${product.name}! This would normally take you to the product page.`);
        });
        
        // Remove ad after animation completes
        setTimeout(() => {
            removeAd(ad);
        }, 8000); // matches the animation duration
    }
    
    function removeAd(ad) {
        if (ad && ad.parentNode) {
            ad.parentNode.removeChild(ad);
            // Remove from active ads array
            const index = activeAds.indexOf(ad);
            if (index > -1) {
                activeAds.splice(index, 1);
            }
        }
    }
      // Function removed as we now only show one ad at a time
      function updateProgress() {
        const progress = (score % 100) / 100;
        progressBar.style.width = `${progress * 100}%`;
    }
    
    function levelUp() {
        level++;
        levelDisplay.textContent = level;
        
        // Increase game difficulty
        clearInterval(gameInterval);
        const interval = Math.max(300, 1000 - (level * 100));
        gameInterval = setInterval(function() {
            if (gameActive) {
                createBean();
            }
        }, interval);
        
        // Reset progress bar
        progressBar.style.width = '0%';
        
        // Check for achievements
        checkAchievements();
    }      function checkAchievements() {
        // Make sure to check achievements in order of difficulty
        
        // Debug log to help troubleshoot
        console.log(`Checking achievements - Score: ${score}, Level: ${level}, Special Beans: ${specialBeansCollected}, Beans in a Row: ${beansCollectedInARow}`);
        console.log(`Current achievements: `, achievements);
        
        try {
            // Verify elements exist
            const a1 = document.getElementById('achievement-1');
            const a2 = document.getElementById('achievement-2');
            const a3 = document.getElementById('achievement-3');
            const a4 = document.getElementById('achievement-4');
            const a5 = document.getElementById('achievement-5');
            
            console.log('Achievement elements found:', !!a1, !!a2, !!a3, !!a4, !!a5);
            
            // Beginner achievement
            if (score >= 50 && !achievements.beginner) {
                unlockAchievement('achievement-1', 'beginner');
            }
            
            // Amateur achievement
            if (score >= 200 && !achievements.amateur) {
                unlockAchievement('achievement-2', 'amateur');
            }
            
            // Professional achievement
            if (level >= 3 && !achievements.professional) {
                unlockAchievement('achievement-3', 'professional');
            }
            
            // Master achievement
            if (specialBeansCollected >= 5 && !achievements.master) {
                unlockAchievement('achievement-4', 'master');
            }
            
            // Perfect achievement
            if (beansCollectedInARow >= 15 && !achievements.perfect) {
                unlockAchievement('achievement-5', 'perfect');
            }
        } catch (error) {
            console.error('Error checking achievements:', error);
        }
    }      function unlockAchievement(id, achievementName) {
    try {
        // Find achievement element and validate
        const achievementEl = document.getElementById(id);
        if (!achievementEl || achievements[achievementName]) return;
        
        // Mark as unlocked
        achievementEl.classList.add('unlocked');
        achievements[achievementName] = true;
        
        console.log(`Achievement unlocked: ${achievementName}`);
        
        // Get tooltip text safely
        let tooltipText = "Achievement Unlocked!";
        const tooltip = achievementEl.querySelector('.achievement-tooltip');
        if (tooltip && tooltip.textContent) {
            tooltipText = tooltip.textContent;
        }

        // Create and display notification - FIXED VARIABLE NAME
        const notification = document.createElement('div'); // Declare with const
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div style="font-weight:bold;color:gold">Achievement Unlocked!</div>
            <div style="color:white">${tooltipText}</div>
        `;
        document.body.appendChild(notification);
        
        // Store notification in a variable that setTimeout can access
        const notificationEl = notification; // Create reference for setTimeout
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (notificationEl && notificationEl.parentNode) {
                notificationEl.parentNode.removeChild(notificationEl);
            }
        }, 3000);

        // Check if all achievements are unlocked
        if (Object.values(achievements).every(v => v)) {
            showSpecialReward();
        }
    } catch (error) {
        console.error('Error in unlockAchievement:', error);
    }
}
    
    function showSpecialReward() {
        gameActive = false;
        clearInterval(gameInterval);
          // Update reward display for all achievements
        rewardDisplay.innerHTML = `
            <h3>Master Barista Achieved!</h3>
            <p class="text-white">You've unlocked all achievements!</p>
            <div class="coupon p-2 bg-white text-dark mb-3" style="border: 2px dashed gold; border-radius: 5px;">
                <h4 class="mb-0">25% OFF ANY PURCHASE</h4>
                <p class="small mb-0">VIP Code: MASTERBARISTA</p>
            </div>
            <p class="text-white">Plus a free coffee of your choice on your next visit!</p>
        `;
        
        rewardDisplay.style.display = 'block';
    }
    
    function gameOver() {
        gameActive = false;
        clearInterval(gameInterval);
        
        // Show game over message with final score
        const finalScore = score;
        
        // Display reward based on score
        rewardDisplay.innerHTML = `
            <h3>Game Over!</h3>
            <p class="text-white">Your final score: ${finalScore}</p>
            <div class="coupon p-2 bg-white text-dark mb-3" style="border: 2px dashed gold; border-radius: 5px;">
                <h4 class="mb-0">10% OFF</h4>
                <p class="small mb-0">Use code: COFFEELOVER</p>
            </div>
            <p class="text-white">Thanks for playing! Try again to earn better rewards!</p>
        `;
        
        rewardDisplay.style.display = 'block';
    }    function startGame() {
        if (!gameActive) {
            gameActive = true;
            score = 0;
            level = 1;
            specialBeansCollected = 0;
            beansCollectedInARow = 0;
            beansMissedInARow = 0;
            
            // Reset achievements
            Object.keys(achievements).forEach(key => {
                achievements[key] = false;
            });
            
            // Reset achievement UI
            document.querySelectorAll('.achievement').forEach(el => {
                el.classList.remove('unlocked');
            });
            
            scoreDisplay.textContent = `Score: ${score}`;
            levelDisplay.textContent = level;
            progressBar.style.width = '0%';
            rewardDisplay.style.display = 'none';
            
            // Remove any existing beans and ads
            document.querySelectorAll('.coffee-bean, .special-bean, .product-ad').forEach(el => {
                el.remove();
            });
            
            // Start creating beans
            gameInterval = setInterval(function() {
                if (gameActive) {
                    createBean();
                }
            }, 1000);
        }
    }    function resetGame() {
        gameActive = false;
        clearInterval(gameInterval);
        score = 0;
        level = 1;
        specialBeansCollected = 0;
        beansCollectedInARow = 0;
        beansMissedInARow = 0;
        
        // Reset active ads array
        activeAds = [];
        
        // Reset achievements
        Object.keys(achievements).forEach(key => {
            achievements[key] = false;
        });
        
        // Reset achievement UI
        document.querySelectorAll('.achievement').forEach(el => {
            el.classList.remove('unlocked');
        });
        
        scoreDisplay.textContent = `Score: ${score}`;
        levelDisplay.textContent = level;
        progressBar.style.width = '0%';
        rewardDisplay.style.display = 'none';
        
        // Remove any existing beans and ads
        document.querySelectorAll('.coffee-bean, .special-bean, .product-ad').forEach(el => {
            el.remove();
        });
    }
    
    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
    
    // Add achievement tooltips behavior
    document.querySelectorAll('.achievement').forEach(achievement => {
        achievement.addEventListener('mouseenter', function() {
            this.querySelector('.achievement-tooltip').style.visibility = 'visible';
            this.querySelector('.achievement-tooltip').style.opacity = '1';
        });
        
        achievement.addEventListener('mouseleave', function() {
            this.querySelector('.achievement-tooltip').style.visibility = 'hidden';
            this.querySelector('.achievement-tooltip').style.opacity = '0';
        });
    });
});
