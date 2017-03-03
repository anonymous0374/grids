export class Grid {	
	public gridIndex: number;
    public cardIndex: number;	

	constructor (public gridClass: string, public occupied: boolean) {
        this.getIndexFromClass();     
	}

	public getIndexFromClass() : number {
	    let classLen: number = this.gridClass.length;
        let gridIndex: number = Number(this.gridClass.substring(4, classLen));
        this.gridIndex = gridIndex;

        return this.gridIndex;
	}

	public getClassFromIndex(index: number, gridClassBase: string) : string {
		gridClassBase = 'grid'; // hardcoded

        return gridClassBase + index;
	}

    public hasCard(): boolean {
        return this.occupied;
    }
	
}
