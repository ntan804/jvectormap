// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree 
//= require jvectormap
//= require jvectormap/maps/us_merc_en
//= require jvectormap/maps/ph_regions_mill_en
//= require jvectormap/maps/world_mill_en
//

  $(document).ready(function() {
    $('#main').vectorMap({
      backgroundColor: 'transparent',
      hoverOpacity: '1.0', 
      hoverColor: '#FFF',
      map: 'ph_regions_mill_en',
      series: {
        regions: [{
        values: gdpData,
        scale: ['#FF70B8', '#FF3399'],
        }]
      }
    });

  });
