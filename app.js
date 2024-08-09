var index;
initialize = () => {
     index = 1;
};

const _dirty = {
    1: "Yes",
    2: "1900",
    3: "3",
    4: "Max Maeder"
};

const _wrong_dirty = {
    1: "No",
    2: "1960",
    3: "5",
    4: "Taylor Swift"
};

const pos_mark = 1;
const neg_mark = -1;

let marks_obtained = {
};

const quiz = {
    1 : {
        "question" : "Does Supersprouts Soy milk contains calcium?",
        "options"  : [
            "Yes", "No"
        ]
    },
    2 : {
        "question" : "When was Yeos established?",
        "options"  : [
            "1900", "1960"
        ]
    },
     3 : {
        "question" : "How many flavours does Supersprouts Soy milk have?",
        "options"  : [
            "5", "3"
        ]
    },
    4 : {
        "question" : "Who is the brand ambassdor of Yeos?",
        "options"  : [
            "Max Maeder", "Taylor Swift"
        ]
    }
}

const btn_sub_ans = document.getElementById("sub_ans");

// const wantQuiz = () => {
//     result = confirm('Do you want to start the quiz?')
//     const customerName = prompt("Please enter your name")
    
//     // if(!result) return;
// }

const hideHomeComps = () => {
    document.getElementById("soy_product").classList.add('hide');
    document.getElementById("quiz_start").classList.add('hide');
}

const getRequiredDivs = () => {
    const qaDiv = document.getElementById("qa_div");
    const qDiv = document.getElementById("q_div");
    const optDiv = document.getElementById("opt_div");
    return [qaDiv, qDiv, optDiv];
}

const showQuiz = () => {

    if(index === 1) {
        hideHomeComps();
        // result = confirm('Do you want to start the quiz?');
        // if(!result) return;
    }

    const [qaDiv, qDiv, optDiv] = getRequiredDivs();
    
    const qz = quiz[index];
    const htmlLegend = getHTMLLegend(quiz[index]['question'],index);
    const htmlOptions = getHTMLOptions(quiz[index]['options']);

    qDiv.innerHTML = htmlLegend;
    optDiv.innerHTML = htmlOptions;  
    qaDiv.classList.add('show');
}

const getHTMLLegend = (quest, ind) => {
    return "<legend> Question "+ind+": "+ quest +"</legend> <br/>"
}

const getHTMLOptions = (options) => {
    let id_idx = 1;
    const htmlOptions = options.map(op => {
       return "<label>" 
        + "<input type='radio' name='quest' value='" + op + "' id='opt"+(id_idx++) +"' />"
        + " "+op
        "</label> "
        +""
    });
    let htmlOptionsStr = "";
    htmlOptions.forEach(element => {
        htmlOptionsStr += element;
    });
    return htmlOptionsStr;
}

const submitAns = (event) => { 
    const selectedRadio = document.querySelector('input[name="quest"]:checked');
    const selectedValue = selectedRadio ? selectedRadio.value : null;
    const error_div = document.getElementById("error_div");
    if(!selectedValue) {
       error_div.classList.remove('hide');
       error_div.classList.add('show_error');
       return;
    }
    error_div.classList.remove('show_error');
    error_div.classList.add('hide');
    disable_button_sub_ans();
    disable_radio_options();
    assign_mark(selectedValue);
}

const disable_button_sub_ans = () => {
    btn_sub_ans.classList.remove('red_button');
    btn_sub_ans.classList.add('grey_button');
    btn_sub_ans.disabled = true;
}

const enable_button_sub_ans = () => {
    btn_sub_ans.classList.remove('grey_button');
    btn_sub_ans.classList.add('red_button');
    btn_sub_ans.disabled = false;
}

const disable_radio_options = () => {
    const opt1 = document.getElementById("opt1");
    const opt2 = document.getElementById("opt2");
    if(opt1) {  
        opt1.disabled = true;
        opt1.checked = true;
    }
    if(opt2) {
        opt1.checked = true;
        opt2.disabled = true;
    }
}

const enable_radio_options = () => {
    const opt1 = document.getElementById("opt1");
    const opt2 = document.getElementById("opt2");
    if(opt1) {  
        opt1.disabled = false;
        opt1.checked = true;
    }
    if(opt2) {
        opt1.checked = true;
        opt2.disabled = false;
    }
}

const assign_mark = (ans_choosen) => {
    if(ans_choosen === _dirty[index]) {
            console.log('answer is correct');
            if(!marks_obtained[index]) {
                marks_obtained[index] = pos_mark;
                show_result('show_result', ans_choosen, true)
            }
        } else {
            if(!marks_obtained[index]) {
                marks_obtained[index] = neg_mark;
                show_result('show_result', ans_choosen, false)
            }
        }
    // console.log("marks_obtained: "+JSON.stringify(marks_obtained));
}

const show_result = (div_id, ans, is_correct) => {
   const result_div = document.getElementById(div_id);
   if(is_correct) {
    result_div.innerHTML = "Bravo! '"+ans+"' is <b><u>correct</u></b> option. +1"
   } else {
    result_div.innerHTML = "Oops! '"+ans+"' is <b><u>incorrect</u></b> option. -1"
   }
   result_div.classList.remove('hide');
   result_div.classList.add('show');
}

const hide_result = (div_id) => {
    const result_div = document.getElementById(div_id);
    result_div.classList.remove('show');
    result_div.classList.add('hide');
}

const next_question = () => {
    if(index >= 4) {
        return;
    }
    index = index + 1;
    console.log("Index: "+index+" Marks: "+JSON.stringify(marks_obtained));
    if(!marks_obtained[index]) {
        hide_result('show_result');
        enable_radio_options();
        enable_button_sub_ans();
    } else {
        const temp_chos = marks_obtained[index] > 0 ? _dirty[index] : _wrong_dirty[index];
        show_result('show_result', temp_chos, marks_obtained[index] > 0 ? true : false);
        disable_radio_options();
        disable_button_sub_ans();
    }
    showQuiz();
}

const prev_question = () => {
    if(index <= 1) {
        return;
    }
    index = index - 1;
    // console.log("Index: "+index+" Marks: "+JSON.stringify(marks_obtained));
    if(!marks_obtained[index]) {
        hide_result('show_result');
        enable_radio_options();
        enable_button_sub_ans();
    } else {
        const temp_chos = marks_obtained[index] > 0 ? _dirty[index] : _wrong_dirty[index];
        show_result('show_result', temp_chos, marks_obtained[index] > 0 ? true : false);
        disable_radio_options();
        disable_button_sub_ans();
    }
    showQuiz();
}

const elem = document.getElementById("quiz_start");
elem.addEventListener("click", showQuiz)
elem.addEventListener("touchstart", showQuiz)


btn_sub_ans.addEventListener("click", submitAns)
btn_sub_ans.addEventListener("touchstart", submitAns)