// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.

var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName +'</option>';
    $('#author-filter').append(optionTag);
  });
};

//TODO: invoke all of the above methods!
articleView.populateFilters();
