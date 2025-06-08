// Basic ads.js file for banner ads and other advertising elements
document.addEventListener('DOMContentLoaded', function() {    // Traditional banner ad
    const bannerContainers = document.querySelectorAll('#banner-container');
    
    if (bannerContainers.length > 0) {
        bannerContainers.forEach(container => {
            const banner = document.createElement('div');
            banner.className = 'traditional-banner';
            
            // Responsive sizing
            const isMobile = window.innerWidth <= 480;
            banner.style.width = isMobile ? '100%' : '468px';
            banner.style.maxWidth = isMobile ? '350px' : '468px';
            banner.style.height = isMobile ? '50px' : '60px';
            banner.style.margin = '0 auto';
            banner.style.backgroundColor = '#70461e';
            banner.style.border = '1px solid #502f0e';
            banner.style.borderRadius = '5px';
            banner.style.display = 'flex';
            banner.style.alignItems = 'center';
            banner.style.justifyContent = 'center';
            banner.style.color = 'white';
            banner.style.fontWeight = 'bold';
            banner.style.fontSize = isMobile ? '12px' : '14px';
            banner.style.padding = '5px';
            banner.style.boxSizing = 'border-box';
            banner.innerHTML = isMobile ? 'Try Our New Premium Blend!' : 'Try Our New Premium Coffee Blend - Now In Store!';
            
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
          // Responsive sizing for billboard
        const isMobile = window.innerWidth <= 480;
        billboard.style.width = isMobile ? '100%' : '750px';
        billboard.style.maxWidth = isMobile ? '350px' : '750px';
        billboard.style.height = '100px'; // Jednakowa wysokość na wszystkich urządzeniach
        billboard.style.margin = '0 auto';
        billboard.style.backgroundColor = '#502f0e';
        billboard.style.backgroundImage = 'linear-gradient(45deg, #70461e, #502f0e)';
        billboard.style.border = '2px solid gold';
        billboard.style.borderRadius = '5px';
        billboard.style.display = 'flex';
        billboard.style.alignItems = 'center';
        billboard.style.justifyContent = 'center';
        billboard.style.color = 'white';
        billboard.style.fontSize = isMobile ? '16px' : '24px'; // Zwiększony font na mobile
        billboard.style.fontWeight = 'bold';
        billboard.style.textAlign = 'center';
        billboard.style.padding = isMobile ? '10px' : '5px'; // Więcej paddingu na mobile
        billboard.style.boxSizing = 'border-box';
        billboard.style.lineHeight = isMobile ? '1.2' : '1.4'; // Dodana kontrola wysokości linii
        billboard.innerHTML = isMobile ? 
            'Grand Opening: New Location<br><strong>20% OFF All Drinks!</strong>' : 
            'Grand Opening: Visit Our New Location <br> 20% OFF All Coffee Drinks!';
        
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
        
        // Responsive sizing for skyscraper
        const isMobile = window.innerWidth <= 768; // Użyjemy 768px dla skyscraper
        skyscraper.style.width = isMobile ? '100%' : '160px';
        skyscraper.style.maxWidth = isMobile ? '300px' : '160px';
        skyscraper.style.height = isMobile ? '200px' : '600px'; // Znacznie mniejsza wysokość na mobile
        skyscraper.style.margin = isMobile ? '0 auto' : '0';
        skyscraper.style.backgroundColor = '#f8f1e9';
        skyscraper.style.border = '1px solid #70461e';
        skyscraper.style.borderRadius = '5px';
        skyscraper.style.display = 'flex';
        skyscraper.style.flexDirection = isMobile ? 'row' : 'column'; // Poziomy layout na mobile
        skyscraper.style.alignItems = 'center';
        skyscraper.style.justifyContent = 'space-between';
        skyscraper.style.padding = isMobile ? '10px' : '15px';
        skyscraper.style.boxSizing = 'border-box';
        skyscraper.style.flexWrap = isMobile ? 'wrap' : 'nowrap';
        
        // Content for the skyscraper - responsive
        if (isMobile) {
            skyscraper.innerHTML = `
                <div style="font-weight: bold; color: #502f0e; margin: 5px; text-align: center; font-size: 14px;">COFFEE SPECIAL</div>
                <div style="color: #70461e; margin: 5px; text-align: center; font-size: 12px;">Premium Beans</div>
                <button style="background-color: #70461e; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-size: 12px;">SHOP NOW</button>
            `;
        } else {
            skyscraper.innerHTML = `
                <div style="font-weight: bold; color: #502f0e; margin-bottom: 10px; text-align: center;">COFFEE LOVERS SPECIAL</div>
                <img src="images/coffee-beans.png" alt="Coffee" style="max-width: 80%; height: auto; margin: 10px 0;">
                <div style="color: #70461e; margin: 10px 0; text-align: center;">Premium Arabica Beans</div>
                <img src="images/coffee-beans.png" alt="Coffee" style="max-width: 80%; height: auto; margin: 10px 0;">
                <div style="color: #70461e; margin: 10px 0; text-align: center;">Free Shipping on Orders $30+</div>
                <button style="background-color: #70461e; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; margin-top: 10px;">SHOP NOW</button>
            `;
        }
        
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
        overlay.style.padding = '10px';
        overlay.style.boxSizing = 'border-box';
        
        // Create interstitial content with responsive design
        const content = document.createElement('div');
        const isMobile = window.innerWidth <= 480;
        
        content.style.width = isMobile ? '95%' : '80%';
        content.style.maxWidth = isMobile ? '350px' : '600px';
        content.style.maxHeight = isMobile ? '90vh' : '80vh';
        content.style.backgroundColor = 'white';
        content.style.padding = isMobile ? '15px' : '20px';
        content.style.borderRadius = '10px';
        content.style.textAlign = 'center';
        content.style.position = 'relative';
        content.style.overflow = 'auto';
        content.style.boxSizing = 'border-box';
        
        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '5px';
        closeBtn.style.right = '5px';
        closeBtn.style.border = 'none';
        closeBtn.style.background = 'none';
        closeBtn.style.fontSize = isMobile ? '20px' : '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#502f0e';
        closeBtn.style.width = '30px';
        closeBtn.style.height = '30px';
        closeBtn.style.display = 'flex';
        closeBtn.style.alignItems = 'center';
        closeBtn.style.justifyContent = 'center';
        
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
        
        // Ad content with responsive layout
        const adLayout = isMobile ? `
            <h2 style="color: #502f0e; font-size: 18px; margin: 25px 0 15px 0;">Special Promotion!</h2>
            <div style="display: block; margin: 15px 0;">
                <img src="images/latte.webp" alt="Coffee Special" style="width: 100px; height: auto; margin-bottom: 15px;">
                <div>
                    <h3 style="color: #70461e; margin: 10px 0; font-size: 16px;">Buy One Get One Free</h3>
                    <p style="font-size: 14px; margin: 10px 0;">Visit our cafe this weekend and enjoy our special BOGO offer on all specialty coffees!</p>
                    <p style="font-weight: bold; font-size: 12px; margin: 5px 0;">*Valid Saturday only.</p>
                </div>
            </div>
            <button style="background-color: #70461e; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-size: 14px;">Get Coupon Code</button>
            <div style="margin-top: 15px; font-size: 11px; color: #999;">
                This ad will close automatically in <span id="countdown">10</span> seconds
            </div>
        ` : `
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
        
        content.innerHTML = adLayout;
        
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
