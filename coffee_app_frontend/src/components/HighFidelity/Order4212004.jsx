import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * Order4212004
 * Renders the high-fidelity Order screen (Screen 421:2004).
 */
export default function Order4212004() {
  useEffect(() => {
    // Inject screen CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/highfidelity-order-421-2004.css';
    document.head.appendChild(link);

    // Inject interactions JS
    const script = document.createElement('script');
    script.src = '/assets/highfidelity-order-421-2004.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="hf-screen-root hf-order-421-2004" style={{ display: 'flex', justifyContent: 'center' }}>
      <main id="screen-421-2004" className="artboard" role="main" aria-label="High-Fidelity ( Order )" data-testid="screen-artboard">
        <img className="reference-bg" alt="Artboard reference" src="/assets/figmaimages/figma_image_421_2004_ae291c51.png" aria-hidden="true" />

        <section className="node frame node-421-2089" aria-label="iOS Status bar" style={{ left: 0, top: 0, width: 375, height: 44 }}>
          <img alt="Time 9:41" src="/assets/figmaimages/figma_image_421_2089_417_348_d7dbad01.svg" style={{ position: 'absolute', left: 24, top: 16, width: 28, height: 12 }} />
          <img alt="Battery outline" src="/assets/figmaimages/figma_image_421_2089_417_332_0193b3f2.svg" style={{ position: 'absolute', left: 326, top: 17, width: 22, height: 11.33 }} />
          <div className="status-bars" aria-hidden="true">
            <div className="sb-signal" />
            <div className="sb-wifi" />
            <div className="sb-battery" />
          </div>
        </section>

        <section className="node frame node-421-2076" aria-label="Header Order" style={{ left: 24, top: 64, width: 188, height: 44 }}>
          <button className="tap-target node node-421-2077" data-testid="btn-back" aria-label="Back" style={{ left: 0, top: 0, width: 44, height: 44 }}>
            <img alt="Back icon" src="/assets/figmaimages/figma_image_421_2078_418_820_011c0318.svg" style={{ position: 'absolute', left: 10, top: 10, width: 24, height: 24 }} />
          </button>
          <div className="text text-title" style={{ position: 'absolute', left: 163, top: 12.5, width: 49, height: 19 }}>Order</div>
        </section>

        <section className="node frame node-421-2071" aria-label="Order type" style={{ left: 24, top: 132, width: 327, height: 43 }}>
          <button className="tap-target node frame node-421-2072 selected" data-testid="btn-deliver" aria-label="Deliver" style={{ left: 4, top: 4, width: 153, height: 35 }}>
            <span className="text text-type-selected" style={{ left: 47, top: 8, width: 59, height: 19 }}>Deliver</span>
          </button>
          <button className="tap-target node frame node-421-2074" data-testid="btn-pickup" aria-label="Pick Up" style={{ left: 157, top: 4, width: 153, height: 35 }}>
            <span className="text text-type" style={{ left: 45, top: 8, width: 62, height: 19 }}>Pick Up</span>
          </button>
        </section>

        <section className="node frame node-421-2049" aria-label="Delivery Address" style={{ left: 24, top: 199, width: 315, height: 121 }}>
          <div className="text text-section-title" style={{ left: 0, top: 0, width: 140, height: 24 }}>Delivery Address</div>

          <div className="node frame node-421-2052" style={{ left: 0, top: 40, width: 315, height: 39 }}>
            <div className="text text-body-strong" style={{ left: 0, top: 0, width: 104, height: 21 }}>Jl. Kpg Sutoyo</div>
            <div className="text text-subtle" style={{ left: 0, top: 25, width: 315, height: 14 }}>
              Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
            </div>
          </div>

          <div className="node frame node-421-2055" style={{ left: 0, top: 95, width: 229, height: 26 }}>
            <button className="tap-target node frame node-421-2056" data-testid="btn-edit-address" aria-label="Edit Address" style={{ left: 0, top: 0, width: 120, height: 26 }}>
              <img alt="Edit icon" src="/assets/figmaimages/figma_image_421_2059_97e827b8.svg" style={{ position: 'absolute', left: 12, top: 6, width: 14, height: 14 }} />
              <span className="text text-link" style={{ left: 30, top: 6, width: 78, height: 14 }}>Edit Address</span>
            </button>
            <button className="tap-target node frame node-421-2063" data-testid="btn-add-note" aria-label="Add Note" style={{ left: 128, top: 0, width: 101, height: 26 }}>
              <img alt="Note icon" src="/assets/figmaimages/figma_image_421_2069_fa47a5e2.svg" style={{ position: 'absolute', left: 12, top: 6, width: 14, height: 14 }} />
              <span className="text text-link" style={{ left: 30, top: 6, width: 59, height: 14 }}>Add Note</span>
            </button>
          </div>
        </section>

        <div className="node line node-421-2048" aria-hidden="true" style={{ left: 40, top: 336, width: 295, height: 1 }} />

        <section className="node frame node-421-2038" aria-label="Checkout Product" style={{ left: 24, top: 352, width: 327, height: 54 }}>
          <div className="node frame node-421-2039" style={{ left: 0, top: 0, width: 173, height: 54 }}>
            <div className="node frame icon-54" style={{ left: 0, top: 0, width: 54, height: 54, borderRadius: 12, overflow: 'hidden' }}>
              <img alt="Coffee image" src="/assets/figmaimages/figma_image_421_2040_417_715_318bcb13.png" style={{ position: 'absolute', left: 0, top: 0, width: 54, height: 54 }} />
            </div>
            <div className="node frame node-421-2041" style={{ left: 70, top: 6, width: 103, height: 42 }}>
              <div className="text text-section-title" style={{ left: 0, top: 0, width: 103, height: 24 }}>Caffe Mocha</div>
              <div className="text text-subtle" style={{ left: 0, top: 28, width: 69, height: 14 }}>Deep Foam</div>
            </div>
          </div>

          <div className="node frame node-421-2044" style={{ left: 237, top: 13, width: 90, height: 24 }}>
            <button className="tap-target icon-btn minus node-421-2045" data-testid="btn-qty-decr" aria-label="Decrease quantity" style={{ left: 0, top: 0, width: 24, height: 24 }}>
              <span aria-hidden="true" className="icon-minus" />
            </button>
            <div className="text text-qty" style={{ left: 42, top: 1, width: 6, height: 21 }}>1</div>
            <button className="tap-target icon-btn plus node-421-2047" data-testid="btn-qty-incr" aria-label="Increase quantity" style={{ left: 66, top: 0, width: 24, height: 24 }}>
              <span aria-hidden="true" className="icon-plus" />
            </button>
          </div>
        </section>

        <div className="node rect node-421-2037" aria-hidden="true" style={{ left: 0, top: 422, width: 375, height: 4 }} />

        <section className="node frame node-421-2032" aria-label="Discount" style={{ left: 24, top: 442, width: 327, height: 56 }}>
          <div className="node frame node-421-2033" style={{ left: 16, top: 17.5, width: 185, height: 21 }}>
            <span className="icon-discount" aria-hidden="true" style={{ left: 0, top: 0.5, width: 20, height: 20 }} />
            <div className="text text-body-strong" style={{ left: 36, top: 0, width: 149, height: 21 }}>1 Discount is Applies</div>
          </div>
          <img alt="Chevron right" src="/assets/figmaimages/figma_image_421_2018_5dab3a17.svg" style={{ position: 'absolute', left: 291, top: 18, width: 20, height: 20 }} />
        </section>

        <section className="node frame node-421-2021" aria-label="Payment Summary" style={{ left: 24, top: 522, width: 327, height: 93 }}>
          <div className="text text-section-title" style={{ left: 0, top: 0, width: 153, height: 24 }}>Payment Summary</div>
          <div className="node frame node-421-2024" style={{ left: 0, top: 40, width: 327, height: 21 }}>
            <div className="text text-body-strong" style={{ left: 0, top: 0, width: 37, height: 21 }}>Price</div>
            <div className="text text-body" style={{ left: 284, top: 0, width: 43, height: 21, textAlign: 'right' }}>$ 4.53</div>
          </div>
          <div className="node frame node-421-2027" style={{ left: 0, top: 69, width: 327, height: 21 }}>
            <div className="text text-body-strong" style={{ left: 0, top: 0, width: 86, height: 21 }}>Delivery Fee</div>
            <div className="node frame node-421-2029" style={{ left: 250, top: 0, width: 77, height: 21 }}>
              <div className="text text-muted" style={{ left: 0, top: 0, width: 36, height: 21 }}>$ 2.0</div>
              <div className="text text-body" style={{ left: 44, top: 0, width: 33, height: 21 }}>$ 1.0</div>
            </div>
          </div>
        </section>

        <section className="node frame node-421-2005" aria-label="Payment Section" style={{ left: 0, top: 647, width: 375, height: 165 }}>
          <div className="node frame node-421-2006" style={{ left: 24, top: 16, width: 327, height: 39 }}>
            <div className="node frame node-421-2007" style={{ left: 0, top: 0, width: 186, height: 39 }}>
              <div className="node frame node-421-2008" style={{ left: 0, top: 9.5, width: 20, height: 20 }}>
                <img alt="Wallet icon" src="/assets/figmaimages/figma_image_421_2012_99b2fdd3.svg" style={{ position: 'absolute', left: 0, top: 0, width: 20, height: 20 }} />
              </div>
              <div className="node frame node-421-2014" style={{ left: 36, top: 0, width: 150, height: 39 }}>
                <div className="text text-body-strong" style={{ left: 0, top: 0, width: 150, height: 17 }}>Cash/Wallet</div>
                <div className="text text-body" style={{ left: 0, top: 21, width: 76, height: 18 }}>$ 5.53</div>
              </div>
            </div>
            <img alt="Arrow down" src="/assets/figmaimages/figma_image_421_2018_5dab3a17.svg" style={{ position: 'absolute', left: 303, top: 7.5, width: 20, height: 20 }} />
          </div>

          <button className="tap-target primary node frame node-421-2019" data-testid="btn-order" aria-label="Order" style={{ left: 24, top: 63, width: 327, height: 56 }}>
            <span className="text text-button" style={{ left: 139, top: 16, width: 49, height: 24 }}>Order</span>
          </button>
        </section>

        <section className="node frame node-421-2090" aria-label="Home indicator" style={{ left: 0, top: 778, width: 375, height: 34 }}>
          <div className="home-indicator" style={{ left: 112, top: 21, width: 134, height: 5 }} />
        </section>
      </main>
    </div>
  );
}
