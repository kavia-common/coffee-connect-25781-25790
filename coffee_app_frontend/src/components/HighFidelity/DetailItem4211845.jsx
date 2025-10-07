import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * DetailItem4211845
 * Renders the high-fidelity Detail Item screen (Screen 421:1845).
 */
export default function DetailItem4211845() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/highfidelity-detail-item-421-1845.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = '/assets/highfidelity-detail-item-421-1845.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="hf-screen-root hf-detail-421-1845" style={{ display: 'flex', justifyContent: 'center' }}>
      <main id="screen-421-1845" className="artboard detail-item-screen" role="main" aria-label="High-Fidelity ( Detail Item )" data-testid="screen-artboard">
        <header className="node frame node-421-1892" aria-label="iOS Status Bar" style={{ left: 0, top: 0, width: 375, height: 44 }}>
          <img alt="Time 9:41" src="/assets/figmaimages/figma_image_421_1892_417_348_d7dbad01.svg" width="28" height="12" style={{ position: 'absolute', left: 24, top: 16, width: 28, height: 12 }} />
          <img alt="Battery outline" src="/assets/figmaimages/figma_image_421_1892_417_332_0193b3f2.svg" width="22" height="11" style={{ position: 'absolute', left: 326, top: 17, width: 22, height: 11.33 }} />
          <div className="status-bars" aria-hidden="true">
            <div className="sb-signal" />
            <div className="sb-wifi" />
            <div className="sb-battery" />
          </div>
        </header>

        <section className="node frame node-421-1886" aria-label="Header Detail" style={{ left: 24, top: 68, width: 327, height: 44 }}>
          <button className="tap-target node node-421-1887" data-testid="btn-back" aria-label="Back" style={{ left: 0, top: 0, width: 44, height: 44 }}>
            <img alt="Back icon" src="/assets/figmaimages/figma_image_421_1888_418_820_011c0318.svg" width="24" height="24" loading="eager" style={{ position: 'absolute', left: 10, top: 10, width: 24, height: 24 }} />
          </button>
          <h1 className="text text-title" style={{ position: 'absolute', left: 153, top: 12.5, width: 49, height: 19 }}>Detail</h1>
          <button className="tap-target node node-421-1890" data-testid="btn-favourite" aria-label="Favourite" style={{ left: 283, top: 0, width: 44, height: 44 }}>
            <span className="icon-heart" aria-hidden="true" style={{ position: 'absolute', left: 12, top: 12, width: 20, height: 20 }} />
          </button>
        </section>

        <section className="node frame node-421-1885" aria-label="Product Image" style={{ left: 24, top: 136, width: 327, height: 202 }}>
          <img alt="Caffe Mocha image" src="/assets/figmaimages/figma_image_421_1885_7ab3366e.png" width="327" height="202" loading="eager" style={{ position: 'absolute', left: 0, top: 0, width: 327, height: 202, borderRadius: 16, objectFit: 'cover' }} />
        </section>

        <section className="node frame node-421-1884" aria-label="Product Detail" style={{ left: 24, top: 354, width: 327, height: 100 }}>
          <div className="node frame node-421-1865" style={{ left: 0, top: 0, width: 327, height: 84 }}>
            <div className="node frame node-421-1866" style={{ left: 0, top: 0, width: 129, height: 84 }}>
              <div className="node frame node-421-1867" style={{ left: 0, top: 0, width: 129, height: 48 }}>
                <h2 className="text text-product-title" style={{ left: 0, top: 0, width: 129, height: 30 }}>Caffe Mocha</h2>
                <div className="text text-subtle" style={{ left: 0, top: 34, width: 46, height: 14 }}>Ice/Hot</div>
              </div>
              <div className="node frame node-421-1870" style={{ left: 0, top: 64, width: 86, height: 20 }}>
                <div className="node frame node-421-1871" style={{ left: 0, top: 0, width: 20, height: 20 }}>
                  <img alt="Rating star" src="/assets/figmaimages/figma_image_421_1874_538d7520.svg" width="18" height="18" loading="lazy" style={{ position: 'absolute', left: 1, top: 1, width: 18, height: 18 }} />
                </div>
                <div className="text text-body" style={{ left: 24, top: 0, width: 62, height: 20 }}>4.8 (230)</div>
              </div>
            </div>

            <div className="node frame node-421-1877" style={{ left: 171, top: 20, width: 156, height: 44 }}>
              <div className="tap-target node frame node-421-1878" aria-label="Fast Delivery" style={{ left: 0, top: 0, width: 44, height: 44 }}>
                <img alt="Fast delivery icon" src="/assets/figmaimages/figma_image_421_1879_418_950_c5f9e328.png" width="20" height="20" loading="lazy" style={{ position: 'absolute', left: 12, top: 12, width: 20, height: 20 }} />
              </div>
              <div className="tap-target node frame node-421-1880" aria-label="Quality Bean" style={{ left: 56, top: 0, width: 44, height: 44 }} aria-hidden="false" />
              <div className="tap-target node frame node-421-1882" aria-label="Extra Milk" style={{ left: 112, top: 0, width: 44, height: 44 }} aria-hidden="false" />
            </div>
          </div>
          <div className="node line node-421-1884-line" aria-hidden="true" style={{ left: 16, top: 100, width: 295, height: 1 }} />
        </section>

        <section className="node frame node-421-1861" aria-label="Description" style={{ left: 24, top: 470, width: 327, height: 95 }}>
          <div className="text text-section-title" style={{ left: 0, top: 0, width: 98, height: 24 }}>Description</div>
          <p className="text text-paragraph" style={{ left: 0, top: 32, width: 327, height: 63 }}>
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. Read More
          </p>
        </section>

        <section className="node frame node-421-1852" aria-label="Size" style={{ left: 24, top: 589, width: 320, height: 81 }}>
          <div className="text text-section-title" style={{ left: 0, top: 0, width: 34, height: 24 }}>Size</div>
          <div className="node frame node-421-1854" role="radiogroup" aria-label="Size options" style={{ left: 0, top: 40, width: 320, height: 41 }}>
            <button className="tap-target size-pill node-421-1855" data-testid="size-s" role="radio" aria-checked="false" aria-label="Size Small" style={{ left: 0, top: 0, width: 96, height: 41 }}>
              <span className="text text-type" style={{ left: 43, top: 10, width: 10, height: 21 }}>S</span>
            </button>
            <button className="tap-target size-pill selected node-421-1857" data-testid="size-m" role="radio" aria-checked="true" aria-label="Size Medium" style={{ left: 112, top: 0, width: 96, height: 41 }}>
              <span className="text text-type-selected" style={{ left: 41.5, top: 10, width: 13, height: 21 }}>M</span>
            </button>
            <button className="tap-target size-pill node-421-1859" data-testid="size-l" role="radio" aria-checked="false" aria-label="Size Large" style={{ left: 224, top: 0, width: 96, height: 41 }}>
              <span className="text text-type" style={{ left: 44, top: 10, width: 8, height: 21 }}>L</span>
            </button>
          </div>
        </section>

        <section className="node frame node-421-1846" aria-label="Bottom Bar" style={{ left: 0, top: 694, width: 375, height: 118 }}>
          <div className="node frame node-421-1847" style={{ left: 24, top: 20, width: 76, height: 48 }}>
            <div className="text text-subtle-strong" style={{ left: 0, top: 0, width: 37, height: 17 }}>Price</div>
            <div className="text text-price" style={{ left: 0, top: 21, width: 76, height: 27 }}>$ 4.53</div>
          </div>
          <button className="tap-target primary cta node-421-1850" data-testid="btn-buy" aria-label="Buy Now" style={{ left: 134, top: 16, width: 217, height: 56 }}>
            <span className="text text-button" style={{ left: 72, top: 16, width: 73, height: 24 }}>Buy Now</span>
          </button>
        </section>

        <section className="node frame node-421-1893" aria-label="Home indicator" style={{ left: 0, top: 778, width: 375, height: 34 }}>
          <div className="home-indicator" style={{ left: 112, top: 21, width: 134, height: 5 }} />
        </section>

        <img className="reference-bg" alt="Artboard reference" src="/assets/figmaimages/figma_image_421_1845_6d26b19c.png" width="375" height="812" loading="lazy" aria-hidden="true" />
      </main>
    </div>
  );
}
