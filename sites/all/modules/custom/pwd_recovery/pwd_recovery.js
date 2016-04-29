/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(document).ready(function() {
//    jQuery('#edit-field-user-profile-fav-object-und-0-value').prop('type', 'password');
    
    jQuery('.form-radio').change(function() {
        var selected = jQuery(this);
        
        jQuery('#user-register-form').find('.security-images').each(function () {
            jQuery(this).hide();
        });
            
        var image_name = selected.next().text().toLowerCase();//alert('.sec_image_display_' + image_name);
        jQuery('#sec_image_display_' + image_name).show();

    });
});