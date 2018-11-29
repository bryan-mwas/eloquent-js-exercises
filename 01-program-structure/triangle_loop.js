/**
 * Displays 7 rows of incrementing hashtags
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */
let octothorpe = '';
for (let i = 0; i < 7; i++) {
    octothorpe += "#";
    console.log(octothorpe);
}

// Alternative
for (let line = "#"; line.length <= 7; line += "#") {
    console.log(line);
}