<template>
  <div class="  pt-24">
<!-- This for chat
Do one similar for questions
Do similar for answers
Think how you structure the data
and how  you present them together
Think about the best possibilities later.  then redesign or re implement
and this is here your mock up

later , Twitter. Real chat. indexedDB .. Fauna .. Disqus. Put many links for prototypes.
Say you wanted to investigate users preferences
You need to re-draw on paper. Keep the initial design and show how it becomes 
-->
    <div style="min-width:100%" class="text-left self-end">

      <ContactForm />  </div>

 <!-- Good table is imported by yarn-->
    <vue-good-table
      :columns="columns"
      :rows="rows"
       
      @on-cell-click="onCellClick"
      compactMode
        styleClass="vgt-table condensed">

    >
    </vue-good-table>
  </div>

</template>


<script>
export default {
  name: 'my-component',
  data(){
    return {
      columns: [
        {

          label: 'Notes',
          field: 'note'
        },

         
      ],
      rows: [

        { note:  "How did you do it?" },
        { note: "How can a given string be reversed using this?"
        },
        { note: "Awsome!"
        },
        { note: "Is this in our Linux courswork??"
        },
        { note: "I could not  loop files names in zsh:("
        },
        { note: "Send the .sh file please"
        }



      ],
    };
  },
    methods: {
      onCellClick(params) {
//Wanna get the question to put it in link. should be there an easier approach 
        this.rows.push({note:"New note is here yooo"});
       console.log(params.row );
        console.log(params.column );
        console.log(params.rowIndex );
        console.log(params.event );

      }
    }
};
</script>
