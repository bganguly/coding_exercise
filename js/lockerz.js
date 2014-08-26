'use strict';

/**
 * Definition/intialisation of certain variables.
 * This 'enum' like mechanism makes code easier to read and makes reuse of
 * string literal constants easier.
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
 * There are three types of lockers available, and the below object tracks these
 * as an object literal.
 */
var initLockersHelper = function(arrayLength, initialValue) {
    var initLockersObject = {
        SMALL_BAG_LOCKERS : arrayInitHelper(arrayLength, initialValue),
        MEDIUM_BAG_LOCKERS : arrayInitHelper(arrayLength, initialValue),
        LARGE_BAG_LOCKERS : arrayInitHelper(arrayLength, initialValue)
    };
    return initLockersObject;
}

/**
 * Prints a ticket for the user to retain.
 */
var printTicketHelper = function(bagTicketObject) {
    var lockerNum = bagTicketObject && bagTicketObject.lockerNum ?
      bagTicketObject.lockerNum : null;
    var lockerType = bagTicketObject && bagTicketObject.lockerType ?
      bagTicketObject.lockerType : null;
    if (lockerNum != null  && lockerType != null) {
      console.log("Greetings Human! We found locker # %d for your bag in" +
        " the %s lockers area. \nPlease retain this ticket as we would need " +
        "it later to deliver your bag.", lockerNum,
        lockerType);
    } else {
        console.log("Apologies Human! We have run out of lockers. You are" +
        " on your own. \nWelcome to Vegas!");
    }
}

/**
 * Updates a given slot in a given locker type. Sets the element in the
 * appropriate locker type array to 1.
 */
var updateLockerArray = function(lockerArray, lockerNum) {
    lockerArray[lockerNum - 1] = 1;
    return lockerArray;
}

/**
 * Updates a bagTicketObject when storing a new bag in the appropriate locker
 * type.
 */
var updateBagTicketObject = function(bagTicketObject, lockerNum, lockerType) {
    bagTicketObject.lockerNum = lockerNum;
    bagTicketObject.lockerType = lockerType;
    return bagTicketObject;
}

/**
 * Allocates a locker for a bag and prints a ticket (with details of the
 * bag/locker allocated) for the customer to retain. Uses Array.indexOf, which
 * is only available in ES5 and above, and typically not available below IE9.
 */
var setBagInLocker = function(bagType, initLockersObject) {
    var bagTicketObject = {}, lockerNum, lockerType, lockerArray;
    switch (bagType) {
      case SMALL_BAG:
        lockerType = SMALL_BAG_LOCKERS;
        lockerArray = initLockersObject.SMALL_BAG_LOCKERS;
        lockerNum = lockerArray.indexOf(0) + 1;
        if (lockerNum > 0) {
            lockerArray = updateLockerArray(lockerArray, lockerNum);
            bagTicketObject = updateBagTicketObject(bagTicketObject, lockerNum,
              lockerType);
            break;
        }
      case MEDIUM_BAG:
        lockerType = MEDIUM_BAG_LOCKERS;
        lockerArray = initLockersObject.MEDIUM_BAG_LOCKERS;
        lockerNum = lockerArray.indexOf(0) + 1;
        if (lockerNum > 0) {
            lockerArray = updateLockerArray(lockerArray, lockerNum);
            bagTicketObject = updateBagTicketObject(bagTicketObject, lockerNum,
              lockerType);
            break;
        }
      case LARGE_BAG:
        lockerType = LARGE_BAG_LOCKERS;
        lockerArray = initLockersObject.LARGE_BAG_LOCKERS;
        lockerNum = lockerArray.indexOf(0) + 1;
        if (lockerNum > 0) {
            lockerArray = updateLockerArray(lockerArray, lockerNum);
            bagTicketObject = updateBagTicketObject(bagTicketObject, lockerNum,
              lockerType);
        }
    }
    printTicketHelper(bagTicketObject);
    return initLockersObject;
}

/**
 * Retreives a bag from locker and frees up that locker for use by another bag.
 */
var getBagFromLocker = function(lockerNum, lockerType, initLockersObject) {
    var lockerArray;
    switch (lockerType) {
      case SMALL_BAG_LOCKERS:
        lockerArray = initLockersObject.SMALL_BAG_LOCKERS;
        lockerArray[lockerNum -1] = 0;
        break;
      case MEDIUM_BAG_LOCKERS:
        lockerArray = initLockersObject.MEDIUM_BAG_LOCKERS;
        lockerArray[lockerNum -1] = 0;
        break;
      case LARGE_BAG_LOCKERS:
        lockerArray = initLockersObject.LARGE_BAG_LOCKERS;
        lockerArray[lockerNum -1] = 0;
    }
    return initLockersObject;
}
