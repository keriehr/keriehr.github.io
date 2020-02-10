// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
 return {id: id, nameFirst: nameFirst, nameLast: nameLast};
} //returning an object that lists the id with the id parameter
//namefirst with the namefirst parameter
//and namelast with the namelast parameter


function makeContactList() {
   /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
     
    var contacts = [];
    //created a container / array to hold the contacts
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },  
        addContact: function(contact){
            contacts.push(contact);
        },//using . push to add the contact to the end of the contacts array
        findContact: function(fullName){
             for (var i = 0; i < contacts.length; i++) {
                  if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName){
                      return contacts[i]}
            //using a for loop to go through each contact, indexing through each contact for their 
            //first and last name. using an if statement saying that if the first and last name are
            //equal to the fullname, it will return the contact
             }
             
        },
        removeContact: function(contact){
             contacts.pop(); // removing a contact using the .pop method
        },
    
        printAllContactNames: function(){
            var all = "";
             for (var i = 0; i < contacts.length; i++) {
                 all += contacts[i].nameFirst + " " + contacts[i].nameLast + `\n` ;
                 
             } return all.substring(0, all.length - 1);
             
             // using a for loop to go through each contact
             //created a string for all of the names to be added to
             //concating all of the names with a line break after each
             // returning the string with all the names
             // and removing the last character so their is no new line character after it 
        }
    };
}





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
