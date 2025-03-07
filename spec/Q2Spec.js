import { convertFtoC } from '../question2.js'

    describe("Areeb", function() {    
        it("converts fahrenheit to celsius", function() { 
            let celsius = convertFtoC(212);
            expect(celsius).toBe("100");

        });

        it("converts fahrenheit to celsius", function() { 
            let celsius = convertFtoC(32);
            expect(celsius).toBe("0");

        });

        it("converts fahrenheit to celsius", function() { 
            let celsius = convertFtoC(70);
            expect(celsius).toBe("21");

        });

    });