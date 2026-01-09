import { useEffect, useRef } from 'react';
import './BackgroundEffect.css';

const GITHUB = {
    username: 'shivasubrahmanya',
    repo: 'My_Portfolio',
    path: 'src/components/Hero.tsx'
};

const CFG = {
    particleCount: 60,   // Adjustable
    scrollSpeed: -0.8,
    mouseRadius: 150,
    mouseForce: 0.15,
    friction: 0.95
};

const TECH_LOGOS = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
];

// Preload images
const preloadedImages: HTMLImageElement[] = [];
TECH_LOGOS.forEach(url => {
    const img = new Image();
    img.src = url;
    preloadedImages.push(img);
});

const LINUX_LOGS: string[] = [
    "[  0.000000] Linux version 5.15.0-generic",
    "[  0.241005] BOOT_IMAGE=/boot/vmlinuz",
    "[  0.241220] KERNEL: CPU0 microcode updated",
    "systemd[1]: Detected architecture x86-64.",
    "root@sys:~# chmod +x deploy.sh",
    "drwxr-xr-x 2 root root 4096 Jan 1",
    "python3 -m pip install tensorflow",
    "node_modules/react/index.js:42:12",
    "Error: ECONNREFUSED 127.0.0.1:8080",
    "[WARN] Heap usage at 89%",
    "gcc -o main main.c -Wall",
    "00000000: 7f 45 4c 46 02 01 01 00",
    "ssh admin@192.168.1.50",
    "ping google.com -c 4",
    "docker container ls -a",
    "git commit -m 'Hotfix'",
    "rm -rf /tmp/*",
    "mv /home/user /mnt/backup"
];

const CURSOR_SNIPPETS = [
    "run", "0xFF", "null", "NaN", "sys",
    "git", "npm", "404", "src", "bin",
    "opt", "dev", "usr", "var", "tmp",
    "cmd", "exe", "bat", "sh", "env"
];

// Particle Class adaptation
class Particle {
    text: string;
    image: HTMLImageElement | null;
    isImage: boolean;
    x: number;
    y: number;
    originX: number;
    vx: number;
    z: number;
    size: number;
    opacityBase: number;
    opacity: number;
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.text = "";
        this.image = null;
        this.isImage = false;
        this.x = 0;
        this.y = 0;
        this.originX = 0;
        this.vx = 0;
        this.z = 0;
        this.size = 0;
        this.opacityBase = 0;
        this.opacity = 0;
        this.reset(true);
    }

    reset(randomY: boolean) {
        // 60% chance to be a logo, 40% log text
        this.isImage = Math.random() > 0.4;

        if (this.isImage && preloadedImages.length > 0) {
            this.image = preloadedImages[Math.floor(Math.random() * preloadedImages.length)];
            this.text = "";
        } else {
            this.text = LINUX_LOGS[Math.floor(Math.random() * LINUX_LOGS.length)];
            this.image = null;
        }

        this.x = Math.random() * this.width;
        this.y = randomY ? Math.random() * this.height : this.height + 30;
        this.originX = this.x;

        this.vx = 0;

        // Depth logic
        this.z = Math.random() * 0.8 + 0.2;
        this.size = this.isImage ? 48 * this.z : 12 * this.z; // Images significantly larger

        // Base opacity
        this.opacityBase = (Math.random() * 0.4 + 0.1);
        this.opacity = this.opacityBase;
    }

    update(mouse: { x: number, y: number }) {
        // Vertical Scroll
        this.y += (CFG.scrollSpeed * this.z);

        // --- SUBTLE PHYSICS ---
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CFG.mouseRadius) {
            let force = (CFG.mouseRadius - distance) / CFG.mouseRadius;
            let pushX = (dx / distance) * force * CFG.mouseForce * -5;

            this.vx += pushX;

            // Slight darken on hover
            this.opacity = Math.min(0.8, this.opacityBase + 0.3);
        } else {
            if (this.opacity > this.opacityBase) this.opacity -= 0.02;
        }

        // Smooth drift back to original X lane
        let returnForce = (this.originX - this.x) * 0.05;
        this.vx += returnForce;

        // Apply friction
        this.x += this.vx;
        this.vx *= CFG.friction;

        // Reset loop
        if (this.y < -30) this.reset(false);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.opacity;

        if (this.isImage && this.image) {
            // Draw Image
            try {
                ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
            } catch (e) {
                // Fallback if image fails to draw
                ctx.font = `600 ${this.size}px 'JetBrains Mono'`;
                ctx.fillStyle = `rgb(0,0,0)`;
                ctx.fillText("?", this.x, this.y);
            }
        } else {
            // Draw Text
            ctx.font = `600 ${this.size}px 'JetBrains Mono'`;
            // Dark text for light theme
            ctx.fillStyle = `rgb(0,0,0)`;
            ctx.fillText(this.text, this.x, this.y);
        }

        ctx.globalAlpha = 1.0; // Reset alpha
    }
}


export const BackgroundEffect = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number>(0);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            particlesRef.current = [];
            for (let i = 0; i < CFG.particleCount; i++) {
                particlesRef.current.push(new Particle(width, height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particlesRef.current.forEach(p => {
                p.update(mouseRef.current);
                p.draw(ctx);
            });
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        resize();
        animate();

        window.addEventListener('resize', resize);

        // Fetch GitHub Data
        const fetchGitHub = async () => {
            try {
                const url = `https://api.github.com/repos/${GITHUB.username}/${GITHUB.repo}/contents/${GITHUB.path}`;
                const res = await fetch(url);
                if (res.ok) {
                    const data = await res.json();
                    const text = atob(data.content);
                    const lines = text.split('\n').map(l => l.trim());

                    const bgLines = lines.filter(l => l.length > 5 && l.length < 60).map(l => `[SRC] ${l}`);
                    LINUX_LOGS.push(...bgLines);

                    const cursorLines = lines.filter(l => l.length > 3 && l.length < 25 && !l.startsWith('/'));
                    if (cursorLines.length > 0) {
                        CURSOR_SNIPPETS.push(...cursorLines);
                    }
                    // Re-init partials to include new logs? Or just they will be picked up on reset.
                    // Existing particles will pick up new logs on reset
                }
            } catch (e) {
                console.error("BG Effect: Failed to fetch github", e);
            }
        };
        fetchGitHub();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    useEffect(() => {
        // Cursor Logic
        const cursorEl = cursorRef.current;
        if (!cursorEl) return;

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            cursorEl.style.left = e.clientX + 'px';
            cursorEl.style.top = e.clientY + 'px';
        };

        // Snippet Cycle
        const intervalId = setInterval(() => {
            const randomSnippet = CURSOR_SNIPPETS[Math.floor(Math.random() * CURSOR_SNIPPETS.length)];
            if (cursorEl.childNodes[0]) {
                cursorEl.childNodes[0].nodeValue = randomSnippet;
            } else {
                cursorEl.innerText = randomSnippet;
            }
        }, 1200);

        // Hover Effect using event delegation
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a') || target.closest('button') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';

            if (isClickable) {
                cursorEl.style.transform = "translate(14px, 14px) scale(1.2)";
                cursorEl.style.fontWeight = "800";
            } else {
                cursorEl.style.transform = "translate(14px, 14px) scale(1.0)";
                cursorEl.style.fontWeight = "600";
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        // Init text
        cursorEl.innerText = "Ready";

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div id="code-cursor" ref={cursorRef} />
            <div className="background-mask" />
            <canvas id="terminal-canvas" ref={canvasRef} />
        </>
    );
};

