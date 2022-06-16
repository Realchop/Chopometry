graphs = document.getElementsByTagName('polyline')
current = graphs.item(0).getAttribute('stroke-width')
max_zoomout = current
max_zoomin = 0.003125
for (let i=0; i<graphs.length; ++i){
    graphs.item(i).setAttribute('stroke-width',current)
}
//Ovaj deo resava jedan izuzetno iritantan vizuelni bag

function left(){
    frame = document.getElementById('mainframe');
    pos = frame.getAttribute('viewBox').split(' ');
    move = document.getElementById('move').innerHTML.split(' ')[2]
    move = parseInt(move)
    x = pos[0]
    y = pos[1]
    zoom1 = pos[2]
    zoom2 = pos[3]
    x = parseInt(x)-move
    frame.setAttribute('viewBox',x+' '+y+' '+zoom1+' '+zoom2);
}

function right(){
    frame = document.getElementById('mainframe');
    pos = frame.getAttribute('viewBox').split(' ');
    move = document.getElementById('move').innerHTML.split(' ')[2]
    move = parseInt(move)
    x = pos[0]
    y = pos[1]
    zoom1 = pos[2]
    zoom2 = pos[3]
    x = parseInt(x)+move
    frame.setAttribute('viewBox',x+' '+y+' '+zoom1+' '+zoom2);
}

function up(){
    frame = document.getElementById('mainframe');
    pos = frame.getAttribute('viewBox').split(' ');
    move = document.getElementById('move').innerHTML.split(' ')[2]
    move = parseInt(move)
    x = pos[0]
    y = pos[1]
    zoom1 = pos[2]
    zoom2 = pos[3]
    y = parseInt(y)-move
    frame.setAttribute('viewBox',x+' '+y+' '+zoom1+' '+zoom2);
}

function down(){
    frame = document.getElementById('mainframe');
    pos = frame.getAttribute('viewBox').split(' ');
    move = document.getElementById('move').innerHTML.split(' ')[2]
    move = parseInt(move)
    x = pos[0]
    y = pos[1]
    zoom1 = pos[2]
    zoom2 = pos[3]
    y = parseInt(y)+move
    frame.setAttribute('viewBox',x+' '+y+' '+zoom1+' '+zoom2);
}

function increase(){
    move = document.getElementById('move')
    words = move.innerHTML.split(' ')
    move.innerHTML = words[0]+' '+words[1]+' '+parseInt(words[2])*10
}

function decrease(){
    move = document.getElementById('move')
    words = move.innerHTML.split(' ')
    move.innerHTML = words[0]+' '+words[1]+' '+parseInt(words[2])/(1+9*(words[2]!='1'))
}

function zoom_in(){
    frame = document.getElementById('mainframe');
    pos = frame.getAttribute('viewBox').split(' ');
    move = document.getElementById('move').innerHTML.split(' ')[2]
    move = parseInt(move)
    x = pos[0]
    y = pos[1]
    zoom1 = pos[2]
    zoom2 = pos[3]
    graphs = document.getElementsByTagName('polyline')
    current = graphs.item(0).getAttribute('stroke-width')
    if (current==max_zoomin) return null
    frame.setAttribute('viewBox',x/2+' '+y/2+' '+zoom1/2+' '+zoom2/2);
    for (let i=0; i<graphs.length; ++i){
        graphs.item(i).setAttribute('stroke-width',current/2)
    }
}

function zoom_out(){
    frame = document.getElementById('mainframe');
    pos = frame.getAttribute('viewBox').split(' ');
    move = document.getElementById('move').innerHTML.split(' ')[2]
    move = parseInt(move)
    x = pos[0]
    y = pos[1]
    zoom1 = pos[2]
    zoom2 = pos[3]
    graphs = document.getElementsByTagName('polyline')
    current = graphs.item(0).getAttribute('stroke-width')
    if (current==max_zoomout) return null
    frame.setAttribute('viewBox',x*2+' '+y*2+' '+zoom1*2+' '+zoom2*2);
    for (let i=0; i<graphs.length; ++i){
        graphs.item(i).setAttribute('stroke-width',current*2)
    }
}