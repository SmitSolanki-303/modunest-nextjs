
const ModularHouseSvg = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full h-auto"
        >
            {/* Base platform */}
            <rect x="150" y="450" width="500" height="20" rx="2" fill="#CBAF87" className="pulse" />

            {/* Main module */}
            <rect x="250" y="250" width="300" height="200" rx="4" fill="#5A3E36" className="slide-in-right" style={{ animationDelay: '0.3s' }} />

            {/* Windows */}
            <rect x="280" y="280" width="80" height="120" rx="2" fill="#ECE6DF" className="fade-in" style={{ animationDelay: '0.8s' }} />
            <rect x="440" y="280" width="80" height="120" rx="2" fill="#ECE6DF" className="fade-in" style={{ animationDelay: '1s' }} />

            {/* Door */}
            <rect x="370" y="350" width="60" height="100" rx="2" fill="#8C977D" className="fade-in" style={{ animationDelay: '1.2s' }} />

            {/* Top module */}
            <rect x="300" y="170" width="200" height="80" rx="4" fill="#8C977D" className="slide-in-right" style={{ animationDelay: '0.6s' }} />

            {/* Top window */}
            <rect x="350" y="190" width="100" height="40" rx="2" fill="#ECE6DF" className="fade-in" style={{ animationDelay: '1.4s' }} />

            {/* Side module */}
            <rect x="550" y="310" width="100" height="140" rx="4" fill="#CBAF87" className="slide-in-right" style={{ animationDelay: '0.9s' }} />

            {/* Side module window */}
            <rect x="570" y="330" width="60" height="60" rx="2" fill="#ECE6DF" className="fade-in" style={{ animationDelay: '1.6s' }} />

            {/* Roof elements */}
            <path d="M250 250L400 180L550 250" stroke="#5A3E36" strokeWidth="10" fill="none" className="fade-in" style={{ animationDelay: '0.4s' }} />

            {/* Solar panels */}
            <rect x="330" y="200" width="20" height="30" rx="1" fill="#333333" className="fade-in" style={{ animationDelay: '1.8s' }} />
            <rect x="360" y="200" width="20" height="30" rx="1" fill="#333333" className="fade-in" style={{ animationDelay: '1.9s' }} />
            <rect x="390" y="200" width="20" height="30" rx="1" fill="#333333" className="fade-in" style={{ animationDelay: '2s' }} />
            <rect x="420" y="200" width="20" height="30" rx="1" fill="#333333" className="fade-in" style={{ animationDelay: '2.1s' }} />
            <rect x="450" y="200" width="20" height="30" rx="1" fill="#333333" className="fade-in" style={{ animationDelay: '2.2s' }} />

            {/* Landscape elements */}
            <path d="M170 450C170 450 190 430 210 440C230 450 250 420 270 430C290 440 300 450 300 450" stroke="#8C977D" strokeWidth="4" fill="none" className="fade-in" style={{ animationDelay: '2.4s' }} />
            <path d="M500 450C500 450 520 430 540 440C560 450 580 420 600 430C620 440 630 450 630 450" stroke="#8C977D" strokeWidth="4" fill="none" className="fade-in" style={{ animationDelay: '2.6s' }} />
        </svg>
    );
};

export default ModularHouseSvg;