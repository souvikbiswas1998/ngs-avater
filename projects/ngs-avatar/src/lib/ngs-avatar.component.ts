import { Input } from '@angular/core';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngs-avatar',
  template: `
  <div class="circle"
    [ngStyle]="{
        'background-color': isFixedColor ? isFixedColor : circleColor,
        'width'           : size,
        'height'          : size
    }"
  >
    <img *ngIf="photoUrl" src="{{photoUrl}}"
    [ngStyle]="{
        'width'           : imageSize ? imageSize : size,
        'height'          : imageSize ? imageSize : size
    }"
    />

    <div *ngIf="showInitials && !photoUrl" class="initials"
        [ngStyle]="{
            'font-size'       : fontSizeSpliter[0]+fontSizeSpliter[1],
            'line-height'     : (fontSizeSpliter[0]-2)+'fontSizeSpliter[1]',
            'letter-spacing'  : letterSpacing+'px',
            'color'           : textColor
        }"
    >
        {{ initials }}
    </div>

    <img *ngIf="!photoUrl && !showInitials" src="data:image/png;base64,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"
    [ngStyle]="{
        'width'           : imageSize ? imageSize : size,
        'height'          : imageSize ? imageSize : size
    }"
    />
  </div>
  `,
  styles: [`
  .circle {
    border-radius   : 50%;
    display         : flex;
    justify-content : center;
    align-items     : center;
  }
  .circle,img{
      border-radius: 50%;
  }
  `],
})
export class NgsavatarComponent implements OnInit, OnChanges {

  @Input()
  public photoUrl: string | undefined;

  @Input()
  public name: string | undefined;

  @Input()
  public size = '108px';

  @Input()
  public fontSize: string | undefined;

  @Input()
  public isFixedColor: string | undefined;

  @Input()
  public imageSize: string | undefined;

  @Input()
  public textColor = '#FFFFFF';

  public showInitials = false;
  public initials!: string;
  public circleColor = '';
  public letterSpacing = 0.5;
  public fontSizeSpliter = [0, 'px'];

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.fontSize) {
      this.fontSizeSpliter[0] = Number(this.fontSize?.match(/\d+/g)) || 0;
      this.fontSizeSpliter[1] =  (this.fontSize?.match(/[a-zA-Z]+/g)) as any || 'px';
    } else {
      this.fontSizeSpliter[0] = (Number(this.size?.match(/\d+/g)) / 2) || 0;
      this.fontSizeSpliter[1] =  (this.size?.match(/[a-zA-Z]+/g)) as any || 'px';
    }
    if (changes.name?.previousValue !== changes.name?.currentValue) {
      this.createInititals();
    }
  }

  ngOnInit(): void {
    if (this.fontSize) {
      this.fontSizeSpliter[0] = Number(this.fontSize?.match(/\d+/g)) || 0;
      this.fontSizeSpliter[1] =  (this.fontSize?.match(/[a-zA-Z]+/g)) as any || 'px';
    } else {
      this.fontSizeSpliter[0] = (Number(this.size?.match(/\d+/g)) / 2) || 0;
      this.fontSizeSpliter[1] =  (this.size?.match(/[a-zA-Z]+/g)) as any || 'px';
    }
    if (this.fontSizeSpliter[0] < 20) { this.letterSpacing = 0.26; }
    else if (this.fontSizeSpliter[0] < 40) { this.letterSpacing = 0.52; }
    else if (this.fontSizeSpliter[0] < 60) { this.letterSpacing = 1.2; }
    else if (this.fontSizeSpliter[0] < 80) { this.letterSpacing = 1.5; }
    if (!this.photoUrl) {
      this.showInitials = true;
      this.createInititals();
    }
    const randomIndex = Math.floor(
      Math.random() * Math.floor(this.colors.length)
    );
    this.circleColor = this.colors[randomIndex];
  }

  private createInititals(): void {
    if (!this.photoUrl) {
      this.showInitials = true;
    } else {
      this.showInitials = false;
    }
    this.initials = '';
    if (this.name) {
      let x = this.name.split(' ');
      x = x.filter((str) => str.trim().length > 0);
      if (x.length > 0) {
        this.initials = (x as any).shift().charAt(0).toUpperCase();
        if (x.length > 0) { this.initials += x.pop()?.charAt(0)?.toUpperCase(); }
      } else { this.showInitials = false; }
    } else { this.showInitials = false; }
  }

}
