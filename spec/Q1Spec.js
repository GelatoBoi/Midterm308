import { convertcoinsintodollars } from '../question1.js'

    describe("Areeb", function() {    
        it("converts coins into dollars", function() { 
            let dollars = convertcoinsintodollars(3, 0, 0, 0, 0);
            expect(dollars).toBe("0.15");

        });

        it("converts coins into dollars", function() { 
            let dollars = convertcoinsintodollars(2, 3, 2, 0, 1);
            expect(dollars).toBe("2.90");

        });

        it("converts coins into dollars", function() { 
            let dollars = convertcoinsintodollars(7, 4, 8, 15, 96);
            expect(dollars).toBe("209.75");

        });
    });