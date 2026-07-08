function askAI(){

let q = document.getElementById("question").value;

if(q.trim() === ""){
    document.getElementById("answer").innerHTML =
    "Sila masukkan soalan.";
    return;
}

document.getElementById("answer").innerHTML =
`
<b>Soalan:</b> ${q}

<br><br>

⚠️ Modul AI belum diaktifkan.

<br><br>

Cadangan:
<ul>
<li>Semak PK 2.2</li>
<li>Semak PK 2.3</li>
<li>Rujuk Arahan Perbendaharaan</li>
</ul>
`;
}
