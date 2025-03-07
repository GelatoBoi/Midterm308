import { earthquake } from '../question5.js'

    describe("Areeb", function() {    
        it("predicts earthquake damage", function() { 
            let Scale = earthquake(212);
            expect(Scale).toBe("Little to no damage");

        });
    
    describe("Areeb", function() {    
        it("predicts earthquake damage", function() { 
            let Scale = earthquake(212);
            expect(Scale).toBe("Some damage");

        });

        describe("Areeb", function() {    
            it("predicts earthquake damage", function() { 
                let Scale = earthquake(212);
                expect(Scale).toBe("Serious Damage");
    
            });
        
        describe("Areeb", function() {    
            it("predicts earthquake damage", function() { 
                let Scale = earthquake(212);
                expect(Scale).toBe("Disaster");
    
            });

        describe("Areeb", function() {    
            it("predicts earthquake damage", function() { 
                let Scale = earthquake(212);
                expect(Scale).toBe("Catastrophe");
    
            });
    });