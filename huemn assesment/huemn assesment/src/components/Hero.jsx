import './Hero.css'
function Hero() {
    return ( 
        <div className="hero-container">
            <div className='hero-logo'>
            <svg className='hero-logo'
                fill="none"
                height="63"
                viewBox="0 0 63 63"
                width="63"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="34.9087" x2="7.63224" y1="61.029" y2="13.7847">
                        <stop offset="0" stopColor="#1e8e3e" />
                        <stop offset="1" stopColor="#34a853" />
                    </linearGradient>
                    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="26.9043" x2="54.1808" y1="63.0788" y2="15.8345">
                        <stop offset="0" stopColor="#fcc934" />
                        <stop offset="1" stopColor="#fbbc04" />
                    </linearGradient>
                    <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="4.22145" x2="58.7745" y1="19.6884" y2="19.6884">
                        <stop offset="0" stopColor="#d93025" />
                        <stop offset="1" stopColor="#ea4335" />
                    </linearGradient>
                </defs>
                <path
                    d="m31.499 47.2466c8.6985 0 15.75-7.0515 15.75-15.75s-7.0515-15.75-15.75-15.75-15.75 7.0515-15.75 15.75 7.0515 15.75 15.75 15.75z"
                    fill="#fff"
                />
                <path
                    d="m17.8591 39.3751-13.63772-23.6212c-2.76527 4.788-4.22118922 10.2197-4.22137998 15.7489s1.45535998 10.961 4.22028998 15.7492c2.76494 4.7882 6.74181 8.7641 11.53071 11.5279 4.7889 2.7637 10.221 4.2179 15.7502 4.2164l13.6377-23.6212v-.0041c-1.3813 2.3954-3.369 4.3848-5.7632 5.7681s-5.1104 2.1118-7.8755 2.1122-5.4816-.7272-7.8762-2.1099c-2.3945-1.3826-4.3829-3.3714-5.7649-5.7663z"
                    fill="url(#a)"
                />
                <path
                    d="m45.1379 39.3741-13.6376 23.6212c5.5292.0008 10.9611-1.4542 15.7496-4.2187 4.7885-2.7644 8.7648-6.7408 11.5291-11.5294 2.7642-4.7887 4.219-10.2207 4.2181-15.7499-.001-5.5292-1.4577-10.9606-4.2237-15.7483h-27.2754l-.0034.0021c2.7651-.0014 5.4818.7254 7.8769 2.1071 2.3951 1.3818 4.3841 3.3698 5.767 5.7643 1.3829 2.3944 2.1109 5.1108 2.1109 7.8758-.0001 2.7651-.7283 5.4814-2.1113 7.8758z"
                    fill="url(#b)"
                />
                <path
                    d="m31.499 43.9688c6.8863 0 12.4688-5.5825 12.4688-12.4688s-5.5825-12.4688-12.4688-12.4688-12.4687 5.5825-12.4687 12.4688 5.5824 12.4688 12.4687 12.4688z"
                    fill="#1a73e8"
                />
                <path
                    d="m31.4991 15.75h27.2754c-2.764-4.7888-6.74-8.76553-11.5283-11.53029-4.7883-2.76475-10.2202-4.22010235-15.7494-4.21970992s-10.9608 1.45650992-15.7487 4.22194992c-4.788 2.76543-8.76341 6.74275-11.52666 11.53185l13.63766 23.6212.0035.0019c-1.3837-2.394-2.1127-5.11-2.1136-7.8751s.7264-5.4817 2.1086-7.8765c1.3821-2.3948 3.3706-4.3835 5.7652-5.7659 2.3947-1.3825 5.1112-2.11 7.8763-2.1094z"
                    fill="url(#c)"
                />
            </svg>
            </div> 
            <div className="text1">
                This browser <br/>build to be yours
            </div>
            <div className="text2">
                <div>Updates</div>
                <div>Yours</div>
                <div>Safe</div>
                <div>Fast</div>
                <div>By Google</div>
            </div>
            <p style={{textAlign:"center", fontSize:"18px", fontWeight:"400", marginTop:"3px"}}>Need the Chrome installer?<span style={{color:"blue"}}> Download here</span></p>
        </div>
    );
}

export default Hero;
