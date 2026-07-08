let knowledge = [];

fetch("knowledge.json")
.then(response => response.json())
.then(data => {
    knowledge = data;
});

function askAI(){

    let question = document.getElementById("question").value.toLowerCase();

    if(question.trim()==""){
        document.getElementById("answer").innerHTML="Sila masukkan soalan.";
        return;
    }

    let found = false;

    for(let item of knowledge){

        if(question.includes(item.keyword)){

            document.getElementById("answer").innerHTML=`
            <h3>Jawapan</h3>

            <p>${item.answer}</p>

            <hr>

            <small>
            Dijana oleh iKnow Procurement Knowledge Base
            </small>
            `;

            found=true;
            break;
        }

    }

    if(!found){

        document.getElementById("answer").innerHTML=`
        <h3>Maklumat Tidak Dijumpai</h3>

        <p>
        Tiada maklumat ditemui dalam Knowledge Base.
        </p>

        <small>
        (Versi AI akan ditambah pada fasa seterusnya)
        </small>
        `;
    }

}
