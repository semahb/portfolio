import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div id="cdot"></div>
    <div id="cring"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CursorComponent implements OnInit {
  ngOnInit(): void {
    this.initCursor();
  }

  private initCursor(): void {
    const cd = document.getElementById('cdot');
    const cr = document.getElementById('cring');

    if (!cd || !cr) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      cd.style.left = mx + 'px';
      cd.style.top = my + 'px';
      cr.style.left = rx + 'px';
      cr.style.top = ry + 'px';
      requestAnimationFrame(loop);
    };

    loop();

    document.querySelectorAll('a,button,.wcard,.prow,.cm').forEach((el) => {
      el.addEventListener('mouseenter', () =>
        document.body.classList.add('cx')
      );
      el.addEventListener('mouseleave', () =>
        document.body.classList.remove('cx')
      );
    });
  }
}
