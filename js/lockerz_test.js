'use strict';


describe("Lockerz coding solution Tests", function() {
  /**
   * Sets up the numbers of lockers available for each locker type. This value
   * can be changed repeatedly for unit testing.
   */
  var arrayLength;
  /**
   * Initialises an object literal with named arrays.
   * There are three types of lockers available, and the below object tracks
   * these as three named arrays in an object literal. Each named array is
   * initially populated with zero'es and is updated with one's as bags are
   * stored in the lockers. When a stored bag is retreived from a locker, the
   * corresponding array element is reset to zero.
   */
  var initLockersObject;
  /**
   * Stores the state of the arrays as a result of a set/get of a bag
   */
  var lockerArray;

  beforeEach(function() {
    arrayLength = 1;
    initLockersObject = initLockersHelper(arrayLength, 0);
  });

  afterEach(function() {
    arrayLength = 0;
    initLockersObject = [];
  });

  it("Demonestrates basic storage/retreival of a bag to/from a locker",
    function() {
      lockerArray = setBagInLocker(SMALL_BAG, initLockersObject);
      expect(lockerArray.SMALL_BAG_LOCKERS[0]).toEqual(1);
      lockerArray = getBagFromLocker(1, SMALL_BAG_LOCKERS, initLockersObject);
      expect(lockerArray.SMALL_BAG_LOCKERS[0]).toEqual(0);
   });

  it("Demonestrates basic storage/retreival of a bag to/from a larger locker",
    function() {
      lockerArray = setBagInLocker(SMALL_BAG, initLockersObject);
      expect(lockerArray.SMALL_BAG_LOCKERS[0]).toEqual(1);
      lockerArray = setBagInLocker(SMALL_BAG, initLockersObject);
      expect(lockerArray.MEDIUM_BAG_LOCKERS[0]).toEqual(1);
      lockerArray = getBagFromLocker(1, SMALL_BAG_LOCKERS, initLockersObject);
      expect(lockerArray.SMALL_BAG_LOCKERS[0]).toEqual(0);
   });

  it("Demonestrates an out-of-lockers condition",
    function() {
      lockerArray = setBagInLocker(SMALL_BAG, initLockersObject);
      lockerArray = setBagInLocker(SMALL_BAG, initLockersObject);
      lockerArray = setBagInLocker(SMALL_BAG, initLockersObject);
      expect(lockerArray.LARGE_BAG_LOCKERS[0]).toEqual(1);
      lockerArray = setBagInLocker(SMALL_BAG, initLockersObject);
   });

});
