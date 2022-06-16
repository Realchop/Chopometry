import numpy as np

def log(x,base=np.e):
    return np.log(x)/np.log(base)

def sin(x):
    a = np.sin(x)
    if(type(a)==np.ndarray):
        a[np.abs(a)<0.01] = 0.0
        return a
    if(np.abs(a)<0.01): return 0.0
    return a[np.isinf(a)==False]

def cos(x):
    a = np.cos(x)
    if(type(a)==np.ndarray):
        a[np.abs(a)<0.01] = 0.0
        return a
    if(np.abs(a)<0.01): return 0.0
    return a

def tan(x):
    return sin(x)/cos(x)

safe = {'cos':cos,'abs':np.abs,'log':log,
        'ln':np.log,'pow':np.exp,'sin':sin,
        'sqrt':np.sqrt,'tan':tan,'tg':tan,
        'pi':np.pi,'arctg':np.arctan,'arcsin':np.arcsin,
        'arccos':np.arccos,'__builtins__':None} 

def calculate(user_input,left=-10,right=10):
    safe['x'] = np.linspace(left,right,10000)
    try:
        ordinate = -1*eval(user_input,safe,{}) 
    except (SyntaxError,TypeError):
        return 'Bad input'
    except ZeroDivisionError:
        return "Can't divide by zero"
    except NameError:
        return "Only lowercase x is a supported variable name"
    graph = []
    part = ''
    if type(ordinate) == np.ndarray:
        for x,y in zip(safe['x'],ordinate):
            if not(np.isinf(y) or np.isnan(y)):
                part += '%s %s ' %(x,y)     
            elif part!='' :
                graph.append(part)
                part = ''
    else:
        graph.append('%s %s %s %s'%(left,ordinate,right,ordinate))
    if part!='':
        graph.append(part) 
    return graph

if __name__ == '__main__':  
    print('Open the other py file')
