const library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
   
  function compare_to_sort(titleA, titleB)
  {
   if (titleA.title < titleB.title)
     return -1;
   if (titleA.title > titleB.title)
     return 1; 
   return 0;
  }

  const reulst = library.sort(compare_to_sort);
  console.log(reulst);

// If the result is -1 a is sorted before b.
// If the result is +1 b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.