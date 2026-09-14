/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  alpha: number;
  vx: number;
  vy: number;
  vz: number;
}

interface Ring3D {
  radius: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  segments: number;
  color: string;
  alpha: number;
}

export default function Interactive3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse coordinates & smooth damping targets
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseActive = false;

    // Handle high-DPI displays
    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initial center position
    targetMouseX = width / 2;
    targetMouseY = height / 2;
    mouseX = targetMouseX;
    mouseY = targetMouseY;

    // Mouse movement listener (Pointer events for desktop & touch)
    const handlePointerMove = (e: PointerEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      mouseActive = true;
    };

    window.addEventListener('pointermove', handlePointerMove);

    // Camera 3D parameters
    const fov = 450;
    const cameraZ = 600;

    // Generate 3D ambient constellation nodes (80 particles)
    const particleCount = 75;
    const particles: Point3D[] = [];
    const spreadX = 900;
    const spreadY = 700;
    const spreadZ = 700;

    for (let i = 0; i < particleCount; i++) {
      const bx = (Math.random() - 0.5) * spreadX;
      const by = (Math.random() - 0.5) * spreadY;
      const bz = (Math.random() - 0.5) * spreadZ;
      // Orange and yellow gradient particle color spectrum
      const colorRand = Math.random();
      const pColor = colorRand > 0.7 
        ? '#FACC15' // bright golden yellow
        : colorRand > 0.45 
        ? '#F59E0B' // amber yellow
        : colorRand > 0.25 
        ? '#EA580C' // vibrant orange
        : '#334155'; // slate node
      particles.push({
        x: bx,
        y: by,
        z: bz,
        baseX: bx,
        baseY: by,
        baseZ: bz,
        size: Math.random() * 2.2 + 0.9,
        color: pColor,
        alpha: Math.random() * 0.6 + 0.35,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3
      });
    }

    // 3D Gyroscopic Rings (Geometric celestial & legal balance spheres with orange-yellow gradient tones)
    const rings: Ring3D[] = [
      {
        radius: 260,
        rotX: 0.8,
        rotY: 0.3,
        rotZ: 0,
        speedX: 0.002,
        speedY: 0.003,
        speedZ: 0.001,
        segments: 64,
        color: '#F59E0B', // Amber gold
        alpha: 0.35
      },
      {
        radius: 340,
        rotX: -0.5,
        rotY: 0.6,
        rotZ: 0.2,
        speedX: -0.0025,
        speedY: 0.0015,
        speedZ: 0.002,
        segments: 64,
        color: '#EA580C', // Sunset orange
        alpha: 0.3
      },
      {
        radius: 420,
        rotX: 1.2,
        rotY: -0.4,
        rotZ: 0.5,
        speedX: 0.001,
        speedY: -0.002,
        speedZ: 0.0015,
        segments: 72,
        color: '#FBBF24', // Sunlit yellow gold
        alpha: 0.24
      },
      {
        radius: 170,
        rotX: -1.1,
        rotY: -0.8,
        rotZ: -0.3,
        speedX: 0.003,
        speedY: 0.0025,
        speedZ: -0.002,
        segments: 48,
        color: '#C2410C', // Deep amber
        alpha: 0.38
      }
    ];

    // 3D Polyhedron Geodesic Nodes (Octahedron / Icosahedron representing foundational law pillars)
    const phi = (1 + Math.sqrt(5)) / 2;
    const polyScale = 140;
    const polyVerticesRaw = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];
    const polyVertices = polyVerticesRaw.map(([vx, vy, vz]) => ({
      x: vx * polyScale,
      y: vy * polyScale,
      z: vz * polyScale
    }));

    // Edges of icosahedron
    const polyEdges: [number, number][] = [];
    for (let i = 0; i < polyVertices.length; i++) {
      for (let j = i + 1; j < polyVertices.length; j++) {
        const dx = polyVertices[i].x - polyVertices[j].x;
        const dy = polyVertices[i].y - polyVertices[j].y;
        const dz = polyVertices[i].z - polyVertices[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        // Connect if adjacent in icosahedron (distance approx 2 * scale)
        if (Math.abs(dist - 2 * polyScale) < 5) {
          polyEdges.push([i, j]);
        }
      }
    }

    let polyAngleX = 0;
    let polyAngleY = 0;

    // 3D Projection Helper
    const project = (
      px: number,
      py: number,
      pz: number,
      rotX: number,
      rotY: number,
      cx: number,
      cy: number
    ) => {
      // Rotate around Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = px * cosY - pz * sinY;
      const z1 = px * sinY + pz * cosY;

      // Rotate around X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = py * cosX - z1 * sinX;
      const z2 = py * sinX + z1 * cosX;

      const scale = fov / (cameraZ + z2);
      return {
        x: cx + x1 * scale,
        y: cy + y2 * scale,
        z: z2,
        scale,
        visible: cameraZ + z2 > 10
      };
    };

    // Main animation loop
    const render = () => {
      // Smooth damp cursor coordinates
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Normalized cursor coordinates (-1 to 1)
      const normX = (mouseX / width - 0.5) * 2;
      const normY = (mouseY / height - 0.5) * 2;

      // 3D World Center (shifts with cursor parallax)
      const centerX = width / 2 + normX * 45;
      const centerY = height / 2 + normY * 35;

      // Camera tilt angles influenced by cursor
      const camPitch = -normY * 0.45;
      const camYaw = normX * 0.55;

      ctx.clearRect(0, 0, width, height);

      // 1. Interactive Ambient Specular Glow on mouse cursor
      // (a) Soft specular executive sheen tracing cursor position
      const ambientSheenGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        Math.max(width, height) * 0.48
      );
      ambientSheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      ambientSheenGrad.addColorStop(0.35, 'rgba(240, 244, 248, 0.2)');
      ambientSheenGrad.addColorStop(0.7, 'rgba(204, 210, 216, 0)');
      ctx.fillStyle = ambientSheenGrad;
      ctx.fillRect(0, 0, width, height);

      // (b) Subtle warm orange-to-yellow specular aura
      const lightGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        Math.max(width, height) * 0.55
      );
      lightGrad.addColorStop(0, 'rgba(250, 204, 21, 0.12)'); // Radiant golden yellow center
      lightGrad.addColorStop(0.25, 'rgba(245, 158, 11, 0.08)'); // Warm amber gold
      lightGrad.addColorStop(0.5, 'rgba(234, 88, 12, 0.03)'); // Sunset orange perimeter
      lightGrad.addColorStop(0.75, 'rgba(204, 210, 216, 0)');
      ctx.fillStyle = lightGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Render 3D Gyroscopic Rings
      rings.forEach((ring) => {
        ring.rotX += ring.speedX;
        ring.rotY += ring.speedY;
        ring.rotZ += ring.speedZ;

        const effectiveRotX = ring.rotX + camPitch * 0.8;
        const effectiveRotY = ring.rotY + camYaw * 0.8;

        ctx.beginPath();
        let first = true;

        for (let i = 0; i <= ring.segments; i++) {
          const theta = (i / ring.segments) * Math.PI * 2;
          const rx = Math.cos(theta) * ring.radius;
          const ry = 0;
          const rz = Math.sin(theta) * ring.radius;

          const p = project(rx, ry, rz, effectiveRotX, effectiveRotY, centerX, centerY);
          if (!p.visible) continue;

          if (first) {
            ctx.moveTo(p.x, p.y);
            first = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }

        ctx.strokeStyle = ring.color;
        ctx.globalAlpha = ring.alpha;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // 3. Render 3D Law Geodesic Polyhedron in Center
      polyAngleX += 0.003;
      polyAngleY += 0.004;
      const polyRotX = polyAngleX + camPitch * 0.9;
      const polyRotY = polyAngleY + camYaw * 0.9;

      const projectedPoly = polyVertices.map((v) =>
        project(v.x, v.y, v.z, polyRotX, polyRotY, centerX, centerY)
      );

      // Draw poly edges
      ctx.lineWidth = 0.9;
      polyEdges.forEach(([i, j]) => {
        const p1 = projectedPoly[i];
        const p2 = projectedPoly[j];
        if (!p1.visible || !p2.visible) return;

        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.05, Math.min(0.35, 0.25 - avgZ / 1400));

        ctx.strokeStyle = '#F59E0B';
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw poly vertices
      projectedPoly.forEach((p) => {
        if (!p.visible) return;
        ctx.beginPath();
        const ptSize = Math.max(1, 2.5 * p.scale);
        ctx.arc(p.x, p.y, ptSize, 0, Math.PI * 2);
        ctx.fillStyle = '#FACC15';
        ctx.globalAlpha = Math.max(0.2, Math.min(0.8, 0.5 - p.z / 1200));
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      // 4. Render 3D Dynamic Floating Particles with Cursor Magnetic Repulsion
      const projectedParticles = particles.map((pt) => {
        // Natural drift
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.z += pt.vz;

        // Soft rebound inside boundary box
        if (Math.abs(pt.x) > spreadX / 2) pt.vx *= -1;
        if (Math.abs(pt.y) > spreadY / 2) pt.vy *= -1;
        if (Math.abs(pt.z) > spreadZ / 2) pt.vz *= -1;

        const p = project(pt.x, pt.y, pt.z, camPitch, camYaw, centerX, centerY);

        // Cursor interactive repulsion in screen space
        if (p.visible && mouseActive) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 35;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        return { ...p, raw: pt };
      });

      // Connect nearby particles with subtle orange threads
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        if (!p1.visible) continue;

        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p2 = projectedParticles[j];
          if (!p2.visible) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          // Connect if within 95px on screen
          if (distSq < 9025) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / 95) * 0.18;
            ctx.strokeStyle = '#F59E0B';
            ctx.globalAlpha = lineAlpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw node
        const nodeRadius = Math.max(0.8, p1.raw.size * p1.scale);
        const nodeAlpha = Math.max(0.1, Math.min(0.8, p1.raw.alpha * (1 - p1.z / 1000)));

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = p1.raw.color;
        ctx.globalAlpha = nodeAlpha;
        ctx.fill();

        // Extra halo for brighter nodes with orange-yellow radiant glow
        if (p1.raw.size > 2.0 && nodeAlpha > 0.4) {
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, nodeRadius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(250, 204, 21, 0.2)';
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none luxury-lightgrey-gradient"
      aria-hidden="true"
    >
      {/* Subtle extra ambient vignette & professional light-grey architectural highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.45)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CCD2D8]/10 to-[#B4BBC4]/30" />

      <canvas
        ref={canvasRef}
        className="relative w-full h-full block opacity-90 sm:opacity-95 transition-opacity duration-1000"
      />
    </div>
  );
}
