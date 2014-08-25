'use strict';

/**
 * Definition/intialisation of certain variables.
 * This 'enum' like mechanism makes code easier to read and makes string literal constants reuse easier.
 */
var SMALL_BAG = 'small';
var MEDIUM_BAG = 'medium';
var LARGE_BAG = 'large';
var SMALL_BAG_LOCKERS = 'smallBags';
var MEDIUM_BAG_LOCKERS = 'mediumBags';
var LARGE_BAG_LOCKERS = 'largeBags';
var SMALL_BAG_ARRAY = [];
var MEDIUM_BAG_ARRAY = [];
var LARGE_BAG_ARRAY = [];

/**
 * Initialises all elements of an array with specified value.
 */
var arrayInitHelper = function(lengthOfArrayToInitialise, valueToInitialise) {
    var initialisedArray = new Array(lengthOfArrayToInitialise);
    for (var i = 0; i < lengthOfArrayToInitialise; i++) {
        initialisedArray[i] = valueToInitialise;
    }
    return initialisedArray;
}

/**
 * Provides a function to populate an object literal with named arrays.
 * There are three types of lockers available, and the below object tracks these as an object literal.
 */
var initLockersHelper = function(arrayLength, initialValue) {
    return {
        SMALL_BAG_LOCKERS : arrayInitHelper(arrayLength, initialValue),
        MEDIUM_BAG_LOCKERS : arrayInitHelper(arrayLength, initialValue),
        LARGE_BAG_LOCKERS : arrayInitHelper(arrayLength, initialValue)
    }
}

/**
 * Prints a ticket for the user to retain.
 */
var printTicketHelper = function(bagTicketObject) {
    var lockerNum = bagTicketObject && bagTicketObject.lockerNum ? bagTicketObject.lockerNum : null;
    var lockerType = bagTicketObject && bagTicketObject.lockerType ? bagTicketObject.lockerType : null;
    if (lockerNum != null  && lockerType != null) {
        console.log("Greetings Human! We found locker # %i for your bag in the %s lockers area. \nPlease retain this ticket.", lockerNum, lockerType);
    } else {
        console.log("Apologies Human! We have run out of lockers. You are on your own. \nWelcome to Vegas!");
    }
}

/**
 * Updates a given slot in a given locker type. Sets the element in the appropriate locker type array to 1.
 */
var updateLockerArray = function(lockerArray, lockerNum) {
    lockerArray[lockerNum - 1] = 1;
    return lockerArray;
}

/**
 * Updates a bagTicketObject when storing a new bag in the appropriate locker type.
 */
var updateBagTicketObject = function(bagTicketObject, lockerNum, lockerType) {
    bagTicketObject.lockerNum = lockerNum;
    bagTicketObject.lockerType = lockerType;
    return bagTicketObject;
}

/**
 * Allocates a locker for a bag and prints a ticket (with details of the bag/locker allocated) for the customer to retain.
 * Uses Array.indexOf, which is only available in ES5 and above, and typically not available below IE9.
 */
var setBagInLocker = function(bagType) {
    var bagTicketObject = {}, lockerNum, lockerType, lockerArray;
    switch (bagType) {
      case SMALL_BAG:
        lockerType = SMALL_BAG_LOCKERS;
        lockerArray = initLockersObject.SMALL_BAG_LOCKERS;
        lockerNum = lockerArray.indexOf(0) +1;
        if (lockerNum > 0) {
            lockerArray = updateLockerArray(lockerArray, lockerNum);
            bagTicketObject = updateBagTicketObject(bagTicketObject, lockerNum, lockerType);
            break;
        }
      case MEDIUM_BAG:
        lockerType = MEDIUM_BAG_LOCKERS;
        lockerArray = initLockersObject.MEDIUM_BAG_LOCKERS;
        lockerNum = lockerArray.indexOf(0) +1;
        if (lockerNum > 0) {
            lockerArray = updateLockerArray(lockerArray, lockerNum);
            bagTicketObject = updateBagTicketObject(bagTicketObject, lockerNum, lockerType);
            break;
        }
      case LARGE_BAG:
        lockerType = LARGE_BAG_LOCKERS;
        lockerArray = initLockersObject.LARGE_BAG_LOCKERS;
        lockerNum = lockerArray.indexOf(0) +1;
        if (lockerNum > 0) {
            lockerArray = updateLockerArray(lockerArray, lockerNum);
            bagTicketObject = updateBagTicketObject(bagTicketObject, lockerNum, lockerType);
        }
    }
    printTicketHelper(bagTicketObject);
}

/**
 * Retreives a bag from locker and frees up that locker for use by another bag.
 */
var getBagFromLocker = function(lockerNum, lockerType) {
    switch (lockerType) {
      case SMALL_BAG_LOCKERS:
        initLockersObject.SMALL_BAG_LOCKERS[lockerNum -1] = 0;
        break;
      case MEDIUM_BAG_LOCKERS:
        initLockersObject.MEDIUM_BAG_LOCKERS[lockerNum -1] = 0;
        break;
      case LARGE_BAG_LOCKERS:
        initLockersObject.LARGE_BAG_LOCKERS[lockerNum -1] = 0;
    }
}

/**
 * Sets up the numbers of lockers available for each locker type. This value can be changed repeatedly for unit testing.
 */
var arrayLength = 10;

/**
 * Initialises an object literal with named arrays.
 * There are three types of lockers available, and the below object tracks these as three named arrays in an object literal.
 * Each named array is initially populated with zero'es and is updated with one's as bags are stored in the lockers.
 * When a stored bag is retreived from a locker, the corresponding array element is reset to zero.
 */
var initLockersObject = initLockersHelper(arrayLength, 0);

/**
 * Sample test run.
 */
setBagInLocker(SMALL_BAG);
setBagInLocker(SMALL_BAG);
setBagInLocker(SMALL_BAG);
setBagInLocker(SMALL_BAG);
getBagFromLocker(2, SMALL_BAG_LOCKERS);
setBagInLocker(SMALL_BAG);
setBagInLocker(LARGE_BAG);
setBagInLocker(SMALL_BAG);
