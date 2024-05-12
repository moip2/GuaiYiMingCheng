let Zhuti_list=["Him","303","晓晓","娇娇","原神","逍遥","狮亿"];
let HouZhui_list=["公主","小公主","公主殿下","大人","皇后","女王","军团","团长","班长"];
let QianZhui_list=["迷你世界","Minecraft"];
function suiji(){
	let a = Zhuti_list[getRandomInt(0,Zhuti_list.length-1)];
	document.getElementById("zhuti").value=a;
	
}

function getInputValue(){
	event.preventDefault()
	let inputElement = document.getElementById('zhuti').value;

	if (inputElement == ""){
		alert("不能为空（")
	}else{
		//document.getElementById('zhuti').disabled=true;
		//document.getElementById('Bt2').disabled=true;
		//禁用按钮，没屁用注释掉算了
	}
	let QianZhui = document.getElementById("QianZhui").value
	let HouZhui = document.getElementById("HouZhui").value
	
	if (QianZhui == "suiji"){
		let a = getRandomInt(1,QianZhui_list.length);
		document.getElementById("QianZhui").selectedIndex = a;
	}
	if (HouZhui == "suiji"){
		let a = getRandomInt(1,HouZhui_list.length);
		document.getElementById("HouZhui").selectedIndex = a;
	}
	let name = QianZhui_list[QianZhui] + inputElement + HouZhui_list[HouZhui];
	document.getElementById('div_Bts_p1').textContent=name;
	
	
}
function suiji_QianHou(){
	let a = getRandomInt(1,QianZhui_list.length);
	document.getElementById("QianZhui").selectedIndex = a;
	let aa = getRandomInt(1,HouZhui_list.length);
	document.getElementById("HouZhui").selectedIndex = aa;
	
}

function KuoHao1(){
	document.getElementById('div_Bts_p1').textContent=document.getElementById('div_Bts_p1').textContent+"（已黑化）";
}
function KuoHao2(){
	document.getElementById('div_Bts_p1').textContent=document.getElementById('div_Bts_p1').textContent+"（未黑化）";
}
function KuoHao3(){
	document.getElementById('div_Bts_p1').textContent=document.getElementById('div_Bts_p1').textContent+"（黑化中）";
}
function KuoHao4(){
	document.getElementById('div_Bts_p1').textContent=document.getElementById('div_Bts_p1').textContent+"（反迷你）";
}
function KuoHao5(){
	document.getElementById('div_Bts_p1').textContent=document.getElementById('div_Bts_p1').textContent+"（反mc）";
}
function ChongZhi(){
	let inputElement = document.getElementById('zhuti').value;
	let QianZhui = document.getElementById("QianZhui").value
	let HouZhui = document.getElementById("HouZhui").value
	let name = QianZhui_list[QianZhui] + inputElement + HouZhui_list[HouZhui];
	document.getElementById('div_Bts_p1').textContent=name;
}



function getRandomInt(min, max) {  
    min = Math.ceil(min);  
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}  

function copyTextToClipboard() {  
	// 获取要复制的文本  
	var copyText = document.getElementById("div_Bts_p1").textContent || document.getElementById("div_Bts_p1").innerText;  

	// 使用浏览器的clipboard API复制文本  
	navigator.clipboard.writeText(copyText).then(function() {  
		console.log('文本已复制到剪贴板');  
	}).catch(function(err) {  
		// 某些浏览器可能不支持clipboard API  
		console.error('复制失败: ', err);  
	});  
}  
