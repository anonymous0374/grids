export class Grid {	
	public gridIndex: number;
    public cardIndex: number;
    public isCardStartPoint: boolean; // when a card occupies multiple grids

	constructor (public cssClass: string, public reserved: boolean) {
        this.getIndexFromClass();     
	}

	public getIndexFromClass() : number {
	    let classLen: number = this.cssClass.length;
        let gridIndex: number = Number(this.cssClass.substring(4, classLen));
        this.gridIndex = gridIndex;

        return this.gridIndex;
	}

	public getClassFromIndex(index: number, gridClassBase: string) : string {
		gridClassBase = 'grid'; // hardcoded

        return gridClassBase + index;
	}

    public hasCard(): boolean {
        return this.reserved;
    }
	
}
