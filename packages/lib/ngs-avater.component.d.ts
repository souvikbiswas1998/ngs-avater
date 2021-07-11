import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class NgsAvaterComponent implements OnInit, OnChanges {
    photoUrl: string | undefined;
    name: string | undefined;
    size: string;
    fontSize: string | undefined;
    isFixedColor: string | undefined;
    imageSize: string | undefined;
    textColor: string;
    showInitials: boolean;
    initials: string;
    circleColor: string;
    letterSpacing: number;
    fontSizeSpliter: (string | number)[];
    private colors;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private createInititals;
}
