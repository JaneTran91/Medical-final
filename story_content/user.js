function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hCWQ8gHa3b":
        Script1();
        break;
      case "6k0Smb2eb0c":
        Script2();
        break;
      case "6Gg7y53grRm":
        Script3();
        break;
      case "60PZxLvCLt6":
        Script4();
        break;
      case "6aWU51Kj2bB":
        Script5();
        break;
      case "6dfDG5dFYla":
        Script6();
        break;
      case "5Uvg8M8LTgq":
        Script7();
        break;
      case "5iguge4JuDp":
        Script8();
        break;
      case "62RULlJWrPa":
        Script9();
        break;
      case "641u2ZX7vnE":
        Script10();
        break;
      case "5Vv0M1JhRr3":
        Script11();
        break;
      case "5Y0CHfqIRT8":
        Script12();
        break;
      case "5z3Wbj63tEq":
        Script13();
        break;
      case "5pU4vel5qHj":
        Script14();
        break;
      case "5mXR6DBxGXK":
        Script15();
        break;
      case "6FfBeDAFxQ3":
        Script16();
        break;
      case "5s36NHakrEi":
        Script17();
        break;
      case "6joJ7pznh0I":
        Script18();
        break;
      case "6etOhloenb6":
        Script19();
        break;
      case "5bIeBb98Xjg":
        Script20();
        break;
      case "68TK0URgKon":
        Script21();
        break;
      case "6T4I8ARO4lb":
        Script22();
        break;
      case "5cR5mcLNPJ6":
        Script23();
        break;
      case "6BRJf6hb4zK":
        Script24();
        break;
      case "6nuCvNgvRDG":
        Script25();
        break;
      case "6BFFHNZu12y":
        Script26();
        break;
      case "6qzCJLf2MWc":
        Script27();
        break;
      case "5YPzMANgxbt":
        Script28();
        break;
      case "6ouZRRpqBWF":
        Script29();
        break;
      case "6fl5Xeb8sBX":
        Script30();
        break;
      case "6dAgnezZcVO":
        Script31();
        break;
      case "5fBegJfffMt":
        Script32();
        break;
      case "6DjyAcTqzMA":
        Script33();
        break;
      case "5nkyWsaUwRl":
        Script34();
        break;
      case "6jbDAbkk0Lj":
        Script35();
        break;
      case "6EzGZMypwGI":
        Script36();
        break;
      case "5sjlyl6ZjXG":
        Script37();
        break;
      case "6ndGd476lAR":
        Script38();
        break;
      case "5f7SkTwjyt1":
        Script39();
        break;
      case "6FexiljJcBC":
        Script40();
        break;
      case "6kWCpTMBEji":
        Script41();
        break;
      case "6RE9KVPjhos":
        Script42();
        break;
      case "6aHCmn5M0ve":
        Script43();
        break;
      case "66thUCBHXoj":
        Script44();
        break;
      case "6428sfrUMd7":
        Script45();
        break;
      case "6PxAYcNzOt9":
        Script46();
        break;
      case "6dNhFjUeXR3":
        Script47();
        break;
      case "6DztSf2UuHn":
        Script48();
        break;
      case "6XI4qvSGykW":
        Script49();
        break;
      case "6JM0urWjBUr":
        Script50();
        break;
      case "6fcer4Afll6":
        Script51();
        break;
      case "6WFRSBpjtpD":
        Script52();
        break;
      case "68sC5Rw72w2":
        Script53();
        break;
      case "5XO7LpL86rQ":
        Script54();
        break;
      case "6AiL3v156Ks":
        Script55();
        break;
      case "63AHaqF1zTC":
        Script56();
        break;
      case "5X8xExjXrai":
        Script57();
        break;
      case "6iEI7Udm22q":
        Script58();
        break;
      case "5jJPJr4DKAo":
        Script59();
        break;
      case "6GZjfaq784y":
        Script60();
        break;
      case "6q8BzDjKRvI":
        Script61();
        break;
      case "5Vvwc2Gcsei":
        Script62();
        break;
      case "6DEV0x6lSGz":
        Script63();
        break;
      case "5tZJWLjYy64":
        Script64();
        break;
      case "601dEOUBgvS":
        Script65();
        break;
      case "5uQBwySB5gv":
        Script66();
        break;
      case "6aWolwbgAVT":
        Script67();
        break;
      case "6aNd73qe19J":
        Script68();
        break;
      case "5pq7kl6FcNN":
        Script69();
        break;
      case "5l0IJWI5kuq":
        Script70();
        break;
  }
}

function Script1()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script2()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script3()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script4()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script5()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script6()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script7()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script8()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script9()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script10()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script11()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script12()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script13()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script14()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script15()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script16()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script17()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script18()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script19()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script20()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script21()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script22()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script23()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script24()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script25()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script26()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script27()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script28()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script29()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script30()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script31()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script32()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script33()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script34()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script35()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script36()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script37()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script38()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script39()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script40()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script41()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script42()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script43()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script44()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script45()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script46()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script47()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script48()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script49()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script50()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script51()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script52()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script53()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script54()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script55()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script56()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script57()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script58()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script59()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script60()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script61()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script62()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script63()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script64()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script65()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script66()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script67()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script68()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script69()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script70()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

