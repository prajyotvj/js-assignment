//new DataTable('#example');

/* disable ordering, paging, sorting
new DataTable('#example', {
    info: false,
    ordering: false,
    paging: false
}); */ 

/* Set ordering of the table at initialisation time
new DataTable('#example', {
    order: [[3, 'desc']]  //The order parameter is an array of arrays where the first value of the inner array is the column to order on, the second is 'asc'/'desc' 
}); */	

let table = new DataTable('#example', {
    //pagingType: 'full_numbers', //display first and last links in pagination
	
	columnDefs: [
        {
            target: 2,  //hide office
            visible: false,
            searchable: false
        },
        {
            target: 3, //hide age
            visible: false
        }
    ]
}); 

//event
table.on('click', 'tbody tr', function () {
    let data = table.row(this).data();
 
    alert('You clicked on ' + data[0] + "'s row");
});

//When the stateSave option is enabled, it can be restored when the user reloads a page, or comes back to the page after visiting a sub-page.
/* new DataTable('#example', {
    stateSave: true
}); 

new DataTable('#example', { 
    paging: false, //no paging
    scrollCollapse: true,
	scrollY: '200px' // specific height set leads to vertical scroll. scrollX: true is used for horizontal scroll
}); */

//Ref how to reder data using ajax: https://datatables.net/examples/basic_init/data_rendering.html