let weddingDay = require('./Wedding Day/weddingDay');
const { expect } = require('chai');

describe('weddingDay Tests', () => {
  describe('pickVenue tests', () => {
    it('invalid input', () => {
      expect(() => weddingDay.pickVenue('', '', '')).to.throw(
        'Invalid Information!'
      );
    });
    it('invalid input - not Varna', () => {
      expect(() => weddingDay.pickVenue(150, 100, 'Sofia')).to.throw(
        'The location of this venue is not in the correct area!'
      );
    });
    it('Meets requirements', () => {
      expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal(
        'This venue meets the requirements, with capacity of 150 guests and 120$ cover.'
      );
    });
    it('Does not meet requirements', () => {
      expect(weddingDay.pickVenue(100, 120, 'Varna')).to.equal(
        'This venue does not meet your requirements!'
      );
    });
  });
  describe('otherSpending', () => {
    it('Invalid Input', () => {
      expect(() => weddingDay.otherSpendings(4, 4, 5)).to.throw(
        'Invalid Information!'
      );
    });
    it('with discount', () => {
      expect(
        weddingDay.otherSpendings(['flowers'], ['pictures'], true)
      ).to.deep.equal(
        'You spend 1020$ for wedding decoration and photography with 15% discount!'
      );
    });
    it('without discount', () => {
      expect(
        weddingDay.otherSpendings(['flowers'], ['pictures'], false)
      ).to.deep.equal(
        'You spend 1200$ for wedding decoration and photography!'
      );
    });
  });

  describe('tableDistribution tests', () => {
    it('invalid input ', () => {
        expect(() => weddingDay.tableDistribution('150', 0)).to.throw(
            "Invalid Information!"
        );
      });
      it('meet requirements', () => {
        expect(weddingDay.tableDistribution(100, 120)).to.equal(
          'There is only 1 people on every table, you can join some tables.'
        );
             expect(weddingDay.tableDistribution(150, 20)).to.equal(
          'You have 20 tables with 8 guests on table.'
        );
      });
    
  });
});
