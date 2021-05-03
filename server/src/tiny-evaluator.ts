export class TinyEvaluator {
    str: string = "";
    pos: number = -1;
    ch: string = "";

    evaluate(expression: string): number {
        this.str = expression;
        this.pos = -1;
        this.nextChar();
        return this.parseExpression()
    }

    nextChar() {
        this.ch = (++this.pos < this.str.length) ? this.str.charAt(this.pos) : '';
    }

    process(charToProcess: string): boolean {
        while (this.ch === ' ') {
            this.nextChar();
        }
        if (this.ch === charToProcess) {
            this.nextChar();
            return true;
        }
        return false;
    }

    parseExpression(): number {
        let x = this.parseTerm();
        for (; ;) {
            if (this.process('+')) {  // addition
                x += this.parseTerm();
            } else if (this.process('-')) {  // subtraction
                x -= this.parseTerm();
            } else {
                return x;
            }
        }
    }

    parseTerm(): number {
        let x = this.parseFactor();
        for (; ;) {
            if (this.process('*')) {  // multiplication
                x *= this.parseFactor();
            } else if (this.process('/')) {  // division
                x /= this.parseFactor();
            } else {
                return x;
            }
        }
    }

    parseFactor(): number {
        if (this.process('+')) {  // unary plus
            return this.parseFactor();
        }
        if (this.process('-')) { // unary minus
            return -this.parseFactor();
        }
        const startPos = this.pos;
        if ((this.ch >= '0' && this.ch <= '9') || this.ch === '.') { // numbers
            while ((this.ch >= '0' && this.ch <= '9') || this.ch === '.') {
                this.nextChar();
            }
            return parseFloat(this.str.substring(startPos, this.pos));
        }
        return 0;
    }

}
