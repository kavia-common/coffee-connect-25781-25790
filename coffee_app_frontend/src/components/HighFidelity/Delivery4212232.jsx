import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * Delivery4212232
 * Renders the high-fidelity Delivery screen (Screen 421:2232).
 */
export default function Delivery4212232() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/highfidelity-delivery-421-2232.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = '/assets/highfidelity-delivery-421-2232.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="hf-screen-root hf-delivery-421-2232" style={{ display: 'flex', justifyContent: 'center' }}>
      <main id="screen-421-2232" className="artboard" role="main" aria-label="High-Fidelity ( Delivery )" data-testid="screen-artboard">
        <img
          className="node node-421-2234"
          data-testid="img-maps-background"
          alt="Maps Background"
          src="/assets/figmaimages/figma_image_421_2234_753bb36e.png"
          style={{ left: -331, top: 0, width: 1081, height: 1020 }}
        />

        <section className="node frame node-421-2269" data-testid="delivery-info" aria-label="Delivery Info" style={{ left: 24, top: 68, width: 327, height: 44 }}>
          <button className="tap-target node node-421-2270" data-testid="btn-back" aria-label="Back" style={{ left: 0, top: 0, width: 44, height: 44 }}>
            <img alt="Back icon" src="/assets/figmaimages/figma_image_421_2271_418_820_011c0318.svg" style={{ position: 'absolute', left: 10, top: 10, width: 24, height: 24 }} />
          </button>
          <button className="tap-target node node-421-2273" data-testid="btn-gps" aria-label="GPS" style={{ left: 283, top: 0, width: 44, height: 44 }}>
            <img alt="GPS icon" src="/assets/figmaimages/figma_image_421_2277_f5a3eff5.svg" style={{ position: 'absolute', left: 10, top: 10, width: 24, height: 24 }} />
          </button>
        </section>

        <div className="node node-421-2260" aria-hidden="true" style={{ left: 66, top: 211, width: 24, height: 24 }}>
          <div className="pin-shape" style={{ left: 5, top: 2, width: 14, height: 17 }} />
          <div className="pin-dot" style={{ left: 9, top: 9, width: 5, height: 5 }} />
          <div className="pin-shadow" style={{ left: 7, top: 20, width: 10, height: 2 }} />
        </div>

        <div className="node node-421-2266 route" aria-hidden="true" style={{ left: 81.5, top: 168.5, width: 170.5, height: 142.5 }} />

        <div className="node frame pill node-421-2267" data-testid="driver-marker" style={{ left: 233, top: 311, width: 40, height: 40 }}>
          <img alt="Driver bike icon" src="/assets/figmaimages/figma_image_421_2268_418_950_8bce4440.png" style={{ position: 'absolute', left: 8, top: 8, width: 24, height: 24 }} />
        </div>

        <section className="node frame node-421-2251" aria-label="Status" style={{ left: 109, top: 526, width: 157, height: 44 }}>
          <h2 className="text text-title" data-testid="text-time-left" style={{ left: 18, top: 0, width: 121, height: 24 }}>
            10 minutes left
          </h2>
          <p className="text text-subtle" data-testid="text-destination" style={{ left: 0, top: 26, width: 157, height: 18 }}>
            Delivery to Jl. Kpg Sutoyo
          </p>
        </section>

        <div className="node frame node-421-2254" aria-hidden="true" style={{ left: 30, top: 595, width: 315, height: 4 }}>
          <div className="progress-seg seg" style={{ left: 0, width: 71.25 }} />
          <div className="progress-seg seg" style={{ left: 81.25, width: 71.25 }} />
          <div className="progress-seg seg" style={{ left: 162.5, width: 71.25 }} />
          <div className="progress-seg seg-active" style={{ left: 243.75, width: 71.25 }} />
        </div>

        <section className="node frame card node-421-2245" aria-label="Delivered info card" style={{ left: 24, top: 615, width: 327, height: 77 }}>
          <div className="node frame icon-56 node-421-2246" aria-hidden="true" style={{ left: 12, top: 10.5, width: 56, height: 56 }}>
            <img alt="Delivery bike" src="/assets/figmaimages/figma_image_421_2247_418_950_766ded5f.png" style={{ position: 'absolute', left: 6, top: 6, width: 44, height: 44 }} />
          </div>
          <div className="node frame node-421-2248" style={{ left: 84, top: 8, width: 243, height: 61 }}>
            <h3 className="text text-title" data-testid="text-delivered-title" style={{ left: 0, top: 0, width: 148, height: 21 }}>Delivered your order</h3>
            <p className="text text-subtle" data-testid="text-delivered-desc" style={{ left: 0, top: 25, width: 243, height: 36 }}>
              We will deliver your goods to you in<br />the shortes possible time.
            </p>
          </div>
        </section>

        <section className="node frame node-421-2236" aria-label="Driver" style={{ left: 24, top: 706, width: 327, height: 56 }}>
          <div className="node frame node-421-2237" style={{ left: 0, top: 0, width: 207, height: 56 }}>
            <div className="node group node-421-2238" style={{ left: 0, top: 0, width: 56, height: 56 }}>
              <img alt="Driver profile image" data-testid="img-driver" src="/assets/figmaimages/figma_image_421_2239_825ddf0f.png" style={{ position: 'absolute', left: 0, top: 0, width: 56, height: 56, borderRadius: 28 }} />
            </div>
            <div className="node frame node-421-2240" style={{ left: 72, top: 8.5, width: 135, height: 39 }}>
              <div className="text text-title" data-testid="text-driver-name" style={{ left: 0, top: 0, width: 135, height: 21 }}>Brooklyn Simmons</div>
              <div className="text text-subtle" data-testid="text-driver-role" style={{ left: 0, top: 25, width: 102, height: 14 }}>Personal Courier</div>
            </div>
          </div>
          <button className="tap-target node frame circular node-421-2243" data-testid="btn-call-driver" aria-label="Call driver" style={{ left: 283, top: 6, width: 44, height: 44 }}>
            <img alt="Call icon" src="/assets/figmaimages/figma_image_421_2244_ae064a56.svg" style={{ position: 'absolute', left: 10, top: 10, width: 24, height: 24 }} />
          </button>
        </section>

        <img alt="Indicator" className="node node-421-2259" data-testid="img-indicator" src="/assets/figmaimages/figma_image_421_2259_cdb51873.svg" style={{ left: 165, top: 506, width: 45, height: 5 }} />

        <section className="node frame node-421-2284" aria-label="iOS Status bar" style={{ left: 0, top: 0, width: 375, height: 44 }}>
          <img alt="Time 9:41" src="/assets/figmaimages/figma_image_421_2284_417_348_d7dbad01.svg" style={{ position: 'absolute', left: 24, top: 16, width: 28, height: 12 }} />
          <div className="status-bars" aria-hidden="true">
            <div className="sb-signal" />
            <div className="sb-wifi" />
            <div className="sb-battery" />
          </div>
        </section>

        <section className="node frame node-421-2285" aria-label="Home indicator" style={{ left: 0, top: 778, width: 375, height: 34 }}>
          <div className="home-indicator" style={{ left: 112, top: 21, width: 134, height: 5 }} />
        </section>

        <img className="reference-bg" alt="Artboard reference" src="/assets/figmaimages/figma_image_421_2232_8340ce4c.png" aria-hidden="true" />
      </main>
    </div>
  );
}
