// Basic ads.js file for banner ads and other advertising elements
document.addEventListener('DOMContentLoaded', function() {
    // Traditional banner ad
    const bannerContainers = document.querySelectorAll('#banner-container');
    
    if (bannerContainers.length > 0) {
        bannerContainers.forEach(container => {
            const banner = document.createElement('div');
            banner.className = 'traditional-banner';
            banner.style.width = '468px';
            banner.style.height = '60px';
            banner.style.margin = '0 auto';
            banner.style.backgroundColor = '#70461e';
            banner.style.border = '1px solid #502f0e';
            banner.style.borderRadius = '5px';
            banner.style.display = 'flex';
            banner.style.alignItems = 'center';
            banner.style.justifyContent = 'center';
            banner.style.color = 'white';
            banner.style.fontWeight = 'bold';
            banner.innerHTML = 'Try Our New Premium Coffee Blend - Now In Store!';
            
            // Make it clickable
            banner.style.cursor = 'pointer';
            banner.addEventListener('click', function() {
                alert('Banner ad clicked! This would normally navigate to a product page.');
            });
            
            container.appendChild(banner);
        });
    }
    
    // Billboard ad (for larger sections)
    const billboardContainer = document.getElementById('billboard-container');
    if (billboardContainer) {
        const billboard = document.createElement('div');
        billboard.className = 'billboard-ad';
        billboard.style.width = '750px';
        billboard.style.height = '100px';
        billboard.style.margin = '0 auto';
        billboard.style.backgroundColor = '#502f0e';
        billboard.style.backgroundImage = 'linear-gradient(45deg, #70461e, #502f0e)';
        billboard.style.border = '2px solid gold';
        billboard.style.borderRadius = '5px';
        billboard.style.display = 'flex';
        billboard.style.alignItems = 'center';
        billboard.style.justifyContent = 'center';
        billboard.style.color = 'white';
        billboard.style.fontSize = '24px';
        billboard.style.fontWeight = 'bold';
        billboard.style.textAlign = 'center';
        billboard.innerHTML = 'Grand Opening: Visit Our New Location <br> 20% OFF All Coffee Drinks!';
        
        billboard.style.cursor = 'pointer';
        billboard.addEventListener('click', function() {
            alert('Billboard ad clicked! Learn more about our grand opening.');
        });
        
        billboardContainer.appendChild(billboard);
    }
    
    // Wide Skyscraper (vertical banner)
    const skyscraperContainer = document.getElementById('skyscraper-container');
    if (skyscraperContainer) {
        const skyscraper = document.createElement('div');
        skyscraper.className = 'skyscraper-ad';
        skyscraper.style.width = '160px';
        skyscraper.style.height = '600px';
        skyscraper.style.backgroundColor = '#f8f1e9';
        skyscraper.style.border = '1px solid #70461e';
        skyscraper.style.borderRadius = '5px';
        skyscraper.style.display = 'flex';
        skyscraper.style.flexDirection = 'column';
        skyscraper.style.alignItems = 'center';
        skyscraper.style.justifyContent = 'space-between';
        skyscraper.style.padding = '15px';
        skyscraper.style.boxSizing = 'border-box';
        
        // Content for the skyscraper
        skyscraper.innerHTML = `
            <div style="font-weight: bold; color: #502f0e; margin-bottom: 10px; text-align: center;">COFFEE LOVERS SPECIAL</div>
            <img src="images/coffee-beans.png" alt="Coffee" style="max-width: 80%; height: auto; margin: 10px 0;">
            <div style="color: #70461e; margin: 10px 0; text-align: center;">Premium Arabica Beans</div>
            <img src="images/coffee-beans.png" alt="Coffee" style="max-width: 80%; height: auto; margin: 10px 0;">
            <div style="color: #70461e; margin: 10px 0; text-align: center;">Free Shipping on Orders $30+</div>
            <button style="background-color: #70461e; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; margin-top: 10px;">SHOP NOW</button>
        `;
        
        skyscraper.style.cursor = 'pointer';
        skyscraper.addEventListener('click', function() {
            alert('Skyscraper ad clicked! Check out our special offers.');
        });
        
        skyscraperContainer.appendChild(skyscraper);
    }
    
    // Button ad (small rectangular ads)
    const buttonContainers = document.querySelectorAll('.button-ad-container');
    if (buttonContainers.length > 0) {
        const buttonContent = [
            { text: 'Loyalty Program', color: '#70461e' },
            { text: 'Gift Cards', color: '#8B5A2B' },
            { text: 'Coffee Classes', color: '#A0522D' }
        ];
        
        buttonContainers.forEach((container, index) => {
            if (buttonContent[index % buttonContent.length]) {
                const button = document.createElement('div');
                button.className = 'button-ad';
                button.style.width = '120px';
                button.style.height = '90px';
                button.style.backgroundColor = buttonContent[index % buttonContent.length].color;
                button.style.color = 'white';
                button.style.display = 'flex';
                button.style.alignItems = 'center';
                button.style.justifyContent = 'center';
                button.style.borderRadius = '5px';
                button.style.fontWeight = 'bold';
                button.style.cursor = 'pointer';
                button.style.textAlign = 'center';
                button.style.fontSize = '14px';
                button.textContent = buttonContent[index % buttonContent.length].text;
                
                button.addEventListener('click', function() {
                    alert(`${buttonContent[index % buttonContent.length].text} button clicked!`);
                });
                
                container.appendChild(button);
            }
        });
    }
    
    // In-content/Inline ad
    const inlineAdContainers = document.querySelectorAll('.inline-ad-container');
    if (inlineAdContainers.length > 0) {
        inlineAdContainers.forEach(container => {
            const inlineAd = document.createElement('div');
            inlineAd.className = 'inline-ad';
            inlineAd.style.width = '300px';
            inlineAd.style.padding = '15px';
            inlineAd.style.backgroundColor = '#f8f1e9';
            inlineAd.style.border = '1px solid #70461e';
            inlineAd.style.borderRadius = '5px';
            inlineAd.style.margin = '15px auto';
            inlineAd.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            
            inlineAd.innerHTML = `
                <div style="font-weight: bold; color: #502f0e; margin-bottom: 10px; font-size: 16px;">COFFEE SUBSCRIPTION</div>
                <div style="color: #70461e; margin-bottom: 10px; font-size: 14px;">Get fresh coffee delivered weekly</div>
                <div style="font-weight: bold; color: #502f0e; font-size: 18px;">20% OFF First Month</div>
                <button style="background-color: #70461e; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; margin-top: 10px; width: 100%;">Subscribe Now</button>
            `;
            
            inlineAd.style.cursor = 'pointer';
            inlineAd.addEventListener('click', function() {
                alert('Inline ad clicked! Learn more about our coffee subscription.');
            });
            
            container.appendChild(inlineAd);
        });
    }
    
    // Interstitial ad (stitial) - shown when navigating between pages
    // We'll simulate this by creating a function that can be triggered on navigation events
    function showInterstitial() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        overlay.style.zIndex = '9999';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        
        // Create interstitial content
        const content = document.createElement('div');
        content.style.width = '80%';
        content.style.maxWidth = '600px';
        content.style.backgroundColor = 'white';
        content.style.padding = '20px';
        content.style.borderRadius = '10px';
        content.style.textAlign = 'center';
        content.style.position = 'relative';
        
        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '10px';
        closeBtn.style.border = 'none';
        closeBtn.style.background = 'none';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#502f0e';
        
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
        
        // Ad content
        content.innerHTML += `
            <h2 style="color: #502f0e;">Special Promotion!</h2>
            <div style="display: flex; align-items: center; justify-content: center; margin: 20px 0;">
                <img src="images/latte.webp" alt="Coffee Special" style="width: 150px; margin-right: 20px;">
                <div style="text-align: left;">
                    <h3 style="color: #70461e; margin-top: 0;">Buy One Get One Free</h3>
                    <p>Visit our cafe this weekend and enjoy our special BOGO offer on all specialty coffees!</p>
                    <p style="font-weight: bold;">*Valid Saturday only.</p>
                </div>
            </div>
            <button style="background-color: #70461e; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Get Coupon Code</button>
            <div style="margin-top: 20px; font-size: 12px; color: #999;">
                This ad will close automatically in <span id="countdown">10</span> seconds
            </div>
        `;
        
        content.appendChild(closeBtn);
        overlay.appendChild(content);
        document.body.appendChild(overlay);
        
        // Auto close after 10 seconds
        let count = 10;
        const countdown = setInterval(function() {
            count--;
            const countdownEl = document.getElementById('countdown');
            if (countdownEl) {
                countdownEl.textContent = count;
            }
            
            if (count <= 0) {
                clearInterval(countdown);
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }
        }, 1000);
    }
    
    // Attach interstitial to navigation links for demonstration
    const navLinks = document.querySelectorAll('.nav-link.click-scroll');
    navLinks.forEach(link => {
        const originalHref = link.getAttribute('href');
        link.addEventListener('click', function(e) {
            // Only show interstitial 20% of the time for better user experience
            if (Math.random() < 0.2) {
                e.preventDefault();
                showInterstitial();
                
                // Navigate after ad closes (after delay)
                setTimeout(() => {
                    window.location.href = originalHref;
                }, 3000);
            }
        });
    });
});
