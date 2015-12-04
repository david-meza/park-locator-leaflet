'use strict';

angular.module('parkLocator').factory('classesService', function(){

  
	
	var parkIds = [
    {
      "ids": "30,74",
      "park": "Anderson Point Park"
    },
    {
      "ids": "82,83",
      "park": "Annie Louise Wilkerson, MD Nature Preserve Park"
    },
    {
      "ids": "23",
      "park": "Apollo Heights Park"
    },
    {
      "ids": "57",
      "park": "Baileywick Road Park"
    },
    {
      "ids": "68",
      "park": "Barwell Road"
    },
    {
      "ids": "7,50",
      "park": "Biltmore Hills"
    },
    {
      "ids": "33",
      "park": "Brentwood Park"
    },
    {
      "ids": "69",
      "park": "Brier Creek Park"
    },
    {
      "ids": "60",
      "park": "Brookhaven"
    },
    {
      "ids": "58,89",
      "park": "Buffaloe Road Athletic Park"
    },
    {
      "ids": "11",
      "park": "Campbell Lodge"
    },
    {
      "ids": "8",
      "park": "Carolina Pines Park"
    },
    {
      "ids": "34",
      "park": "Cedar Hills Park"
    },
    {
      "ids": "9,54",
      "park": "John Chavis Memorial Park"
    },
    {
      "ids": "11",
      "park": "Durant Nature Preserve"
    },
    {
      "ids": "35",
      "park": "Eastgate Park"
    },
    {
      "ids": "75",
      "park": "Fallon Park"
    },
    {
      "ids": "36",
      "park": "Fred Fletcher Park"
    },
    {
      "ids": "62",
      "park": "Gardner"
    },
    {
      "ids": "39",
      "park": "Glen Eden Pilot Park"
    },
    {
      "ids": "10",
      "park": "Green Road Park"
    },
    {
      "ids": "77",
      "park": "Greystone Recreation Center"
    },
    {
      "ids": "12",
      "park": "Halifax Park"
    },
    {
      "ids": "90",
      "park": "Hill Street Park"
    },
    {
      "ids": "72",
      "park": "Honeycutt Park"
    },
    {
      "ids": "81",
      "park": "Isabella Cannon Park"
    },
    {
      "ids": "2,13",
      "park": "Jaycee Park"
    },
    {
      "ids": "42",
      "park": "John P Top Greene Park"
    },
    {
      "ids": "37",
      "park": "Kentwood Park"
    },
    {
      "ids": "38",
      "park": "Kiwanis Park"
    },
    {
      "ids": "14",
      "park": "Lake Johnson Park"
    },
    {
      "ids": "14",
      "park": "Lake Johnson Nature Preserve"
    },
    {
      "ids": "53",
      "park": "Lake Johnson Pool"
    },
    {
      "ids": "16",
      "park": "Lake Lynn"
    },
    {
      "ids": "15",
      "park": "Lake Wheeler Park"
    },
    {
      "ids": "3",
      "park": "Laurel Hills Park"
    },
    {
      "ids": "17",
      "park": "Lions Park"
    },
    {
      "ids": "52",
      "park": "Longview Park"
    },
    {
      "ids": "46",
      "park": "Marsh Creek Park"
    },
    {
      "ids": "19",
      "park": "Method Park"
    },
    {
      "ids": "6,18,43,88",
      "park": "Millbrook Exchange Park"
    },
    {
      "ids": "56",
      "park": "Moore Square"
    },
    {
      "ids": "64",
      "park": "Mordecai Square"
    },
    {
      "ids": "84",
      "park": "Nash Square"
    },
    {
      "ids": "48",
      "park": "North Hills Park"
    },
    {
      "ids": "45",
      "park": "Oakwood Park"
    },
    {
      "ids": "1,20",
      "park": "Optimist Park"
    },
    {
      "ids": "59",
      "park": "Peach Road Park"
    },
    {
      "ids": "40",
      "park": "Powell Drive Park"
    },
    {
      "ids": "4,21,22,49",
      "park": "Pullen Park"
    },
    {
      "ids": "5",
      "park": "Pullen Arts Center"
    },
    {
      "ids": "4,21,22,49",
      "park": "Pullen Amusement"
    },
    {
      "ids": "91",
      "park": "Raleigh City Museum"
    },
    {
      "ids": "51",
      "park": "Ridge Road"
    },
    {
      "ids": "24",
      "park": "Roberts Park"
    },
    {
      "ids": "86",
      "park": "Rose Garden & Little Theatre"
    },
    {
      "ids": "41",
      "park": "Sanderford Road Park"
    },
    {
      "ids": "25",
      "park": "Sertoma Arts Center"
    },
    {
      "ids": "55",
      "park": "Shelley Lake Park"
    },
    {
      "ids": "31",
      "park": "Southgate Park"
    },
    {
      "ids": "47",
      "park": "Spring Forest Road Park"
    },
    {
      "ids": "26,80",
      "park": "Tarboro Road Park"
    },
    {
      "ids": "76",
      "park": "Tucker House"
    },
    {
      "ids": "29",
      "park": "Walnut Creek Softball Complex"
    },
    {
      "ids": "78",
      "park": "Walnut Creek Wetland Center"
    },
    {
      "ids": "87",
      "park": "Whitaker Mill"
    },
    {
      "ids": "44",
      "park": "Williams Park"
    },
    {
      "ids": "61",
      "park": "Windemere Beaver Dam Park"
    },
    {
      "ids": "28",
      "park": "Worthdale Park"
    }
  ];
  

	return {
		parkIds: parkIds
	};
});