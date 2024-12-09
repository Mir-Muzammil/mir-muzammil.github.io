$(document).ready(function () {
    // Default State: Show all tables and highlight 'All' button
    $('.table-responsive').removeClass('d-none'); // Show all tables
    $('#all').addClass('active'); // Set 'All' button as active

    // Function to reset all buttons and show/hide tables
    function setActiveButton(buttonId, tableId) {
        $('.btn-group .btn').removeClass('active'); // Remove active class from all buttons
        $(buttonId).addClass('active'); // Add active class to the clicked button
        if (tableId === 'all') {
            $('.table-responsive').removeClass('d-none'); // Show all tables
        } else {
            $('.table-responsive').addClass('d-none'); // Hide all tables
            $(tableId).removeClass('d-none'); // Show the selected table
        }
    }

    $('#all').click(function () {
        setActiveButton('#all', 'all');
    });
    $('#brandA').click(function () {
        setActiveButton('#brandA', '#KHAADI-table');
    });
    $('#brandB').click(function () {
        setActiveButton('#brandB', '#ETHNIC-table');
    });
    $('#brandC').click(function () {
        setActiveButton('#brandC', '#SAPPHIRE-table');
    });
    $('#brandD').click(function () {
        setActiveButton('#brandD', '#SHEEP-table');
    });
});
