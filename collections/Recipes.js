import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function(userId,doc){
    return !!userId
   }
});
// ingredients schema
Ingredient = new SimpleSchema({
  name: {
    type: String
  }, 
  amount: {
    type: String
  }
});
// recipe schema
RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },

    description:{
      type: String,
      label: "Description"
    },

    ingredients: [ Ingredient ],
    
    inMenu: {
      type: Boolean,
      defaultValue: false,
      optional: true,
      autoform:{
        type:"hidden"
      }
    },
    author:{
      type: String,
      label: "Author",
      autoValue : function() {
          return this.userId
      },
      autoform:{
        type:"hidden"
      }
    },
    
    createdAt: {
        type: Date,
        label: "createdAt",
        autoValue: function(){
          return new Date()
        },
        autoform:{
          type:"hidden"
        }

    }
});
Recipes.attachSchema(RecipeSchema);
