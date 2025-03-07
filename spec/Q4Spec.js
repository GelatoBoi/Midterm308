import { gymmembership } from '../question4.js'

    describe("Areeb", function() {    
        it("finds gym discount", function() { 
            let discount = gymmembership(25, 5, 0, 0);
            expect(discount).toBe("23.75");

        });

        it("finds gym discount", function() { 
            let discount = gymmembership(25, 0, 10, 0);
            expect(discount).toBe("22.5");

        });

        it("finds gym discount", function() { 
            let discount = gymmembership(25, 0, 0, 15);
            expect(discount).toBe("21.25");

        });
       

    });