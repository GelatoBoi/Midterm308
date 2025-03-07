import { cube } from '../question3.js'

    describe("Areeb", function() {    
        it("calculates the volume of a cube", function() { 
            let volume = cube(4);
            expect(volume).toBe("64");

        });

        it("calculates the volume of a cube", function() { 
            let celsius = convertFtoC(64);
            expect(celsius).toBe("262144");

        });

        it("calculates the volume of a cube", function() { 
            let celsius = convertFtoC(5);
            expect(celsius).toBe("125");

        });

    });