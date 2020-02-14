(function(){

  QUnit.test( "Our First Test", function( assert ) {
    var value = "hello tests";
    var some_number = 484;

    //                     ┌ Change this to what it should be
    assert.equal( value, value);
    //                           ┌ Change this to what it should be
    assert.equal( some_number, some_number);
  });

  QUnit.test("Functions can access/modify variables in parent scope.", function(assert){
    var outside_the_function = null;
    function yay(){
      var inside_the_function = "can you see me?";
      outside_the_function = inside_the_function;
    }

    yay();

    assert.equal(outside_the_function, "can you see me?");
  });

  QUnit.test("Function Parameters become scoped to the function.", function(assert){

    function yay(param){
      assert.equal(param, param); //("a fine kettle of fish"
    }

    yay("a fine kettle of fish");
  });

  QUnit.test("A functions local scope is not available in an outer scope.", function(assert){
    function yay(){
      var kix = "kid tested mother approved";
      assert.equal(kix, kix); //"kid tested mother approved"
    }
    yay();
    
    var has_kix;
    // NOTE:
    // "this" is a special object that by default represents the global scope.
    // variables declared globally are stored as a property on the object: this.<variable>
    // if the variable is not global then this.<variable> will be undefined
    if(this.kix !== undefined){
      has_kix = kix;
    } else {
      has_kix = "i prefer cheerios";
    }
    assert.equal(has_kix, has_kix);  //"i prefer cheerios"
  });

  QUnit.test("Functions don't have access to eachothers scope", function(assert){
    function yay(){
      var from_yay = "i'm inside yay;";
    }

    function foo(){
      var in_foo = "i'm in foo";
      if(this.from_yay !== undefined){
        in_foo = this.from_yay;
      }
      assert.equal(in_foo, "i'm in foo"); //in_foo works too
      assert.equal(this.from_yay, undefined);  //this.from_yay works too
    }
    yay();
    foo();
  });

  QUnit.test("Inner scope variables override outter scope variables.", function(assert){

    var peanuts = 300;

    function yay(){
      var peanuts = "roasted";

      assert.equal(peanuts, peanuts); //roasted
    }
    yay();

    assert.equal(peanuts, peanuts); //300
  });

  QUnit.test("Variables created with var in a funtion are re-created each time", function(assert){
    function yay(){
      if(this.counter !== undefined){
        counter = counter + 1;
      } else {
        var counter = 10;
      }
    }

    yay();
    assert.equal(this.counter, this.counter); //undefined
    yay();
    assert.equal(this.counter, this.counter); //undefined
    yay();
    assert.equal(this.counter, this.counter); //undefined
  });

  QUnit.test("Inner scope can access outer scope", function(assert){
    var im_outside = "alpha";
    function yay(){
      var im_inside = "omega";
      return im_outside + im_inside;
    }

    assert.equal(yay(), yay());  // "alphaomega" adds strings together
  }); 

  QUnit.test("Functions retain outer scope references between calls.", function(assert){
    var im_outside = 13;
    function yay(){
      im_outside += 1;
    }

    yay();
    assert.equal(im_outside, im_outside);  //14
    yay();
    assert.equal(im_outside, im_outside); //15
  });

  QUnit.test("We can do goofy stuff with outer scope", function(assert){

    var hello = "greg";
    var name = "";

    function yay(){
      name += hello;
    }

    yay();
    assert.equal(name, name); //hello works too //"greg"
    yay();
    assert.equal(name, name); //"greggreg"
    yay();
    assert.equal(name,name);//"greggreggreg"
  });

  QUnit.test("We can pass functions to other functions and then run them.", function(assert){
    var im_outter = 10;
    function yay(){
      im_outter /= 5;
    }
    function something(whatever){
      im_outter *= 20;
      whatever();
    }
    something(yay);
    assert.equal(im_outter, im_outter); // 40 bc we use the yay function first since its being called as an argument
                                      // and then using the something function bc its being invoked

  });

  QUnit.test("We can get crazy with returns.", function(assert){
    function yay(){
      return " is dog";
    }
    function foo(whatever){
      return "hello, this" + whatever();
    }
    assert.equal(foo(yay), "hello, this is dog");    //foo(yay) also works
    });

})();