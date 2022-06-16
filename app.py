from flask import Flask, render_template, request
from main_algo import calculate

app = Flask(__name__) 

@app.route('/',methods=['GET', 'POST'])
def home():
    context = {
            'graph' : '',
            'message' : '',
            'rleft' : -10,
            'rmax' : 10,
        }
    if request.method == 'POST':
        user_input = request.form['input']
        try:
            left, right = int(request.form['range'].split(',')[0]), int(request.form['range'].split(',')[1]) 
        except:
            left, right = -10, 10
        graph = calculate(user_input,left,right)  
        if type(graph) == str: 
            context['message'] = graph
            return render_template('base.html',context=context)
        first = float(graph[0].split(' ')[1]) 
        context['graph'] = graph
        context['dims'] = '%s %s %s %s'%(left,first-(right-left)/2,right-left,right-left)  
        context['lmax'] = left 
        context['rmax'] = right-left
        context['message'] = 'Graph of ' + user_input  
    return render_template('base.html',context=context)
    

if __name__ == '__main__': 
    app.run(debug=True)