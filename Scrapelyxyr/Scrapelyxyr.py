# -*- coding: utf-8 -*-
import re, os, time, sys
import string, json, demjson
import urllib.request

def stripHtml(text):
    return re.compile(r'(<!--.*?-->|<[^>]*>)').sub('', text).replace('&raquo;','').strip()

def readMoneyPl():
    html =urllib.request.urlopen('http://www.money.pl/banki/elixir/').read(); # .decode('utf-8'); 
    table = re.compile('<table class="tabela_elyxyr (.*?)</table', re.DOTALL).findall(str(html))
    rows = re.compile('<tr>(.*?)</tr', re.DOTALL).findall(table[0])
    banks = []
    for idx, val in enumerate(rows):
        cols = re.compile('<td(.*?)>(.*?)</td', re.DOTALL).findall(val)
        if(len(cols)>0):

            outs = []
            outs.append(stripHtml(cols[1][1]));
            outs.append(stripHtml(cols[2][1]));
            outs.append(stripHtml(cols[3][1]));

            ins = []
            ins.append(stripHtml(cols[4][1]));
            ins.append(stripHtml(cols[5][1]));
            ins.append(stripHtml(cols[6][1]));
            b = {
                'name' : stripHtml(cols[0][1]),
                'outs': outs,
                'ins': ins
                }
            banks.append(b)
    return banks
    # print(json.dumps(banks, indent=2))
    # millennium
    # millennium
def readDataFile():
    days_file = open('../Elixir/www/js/app/data.js','r')
    datt = re.compile('var banks =(.*?);', re.DOTALL).findall( days_file.read())
    banks = demjson.decode(datt[0])
    return banks

def findByName(list, name):
    for idx, val in enumerate(list):
        nn = val['name'].lower()
        nn = nn.replace(' bank','')
        
        mm= name.lower()
        mm = mm.replace(' bank','')
        # print('   '+name.lower()+'---->'+nn)
        if(mm in nn):
            return val


moneypl = readMoneyPl()
local = readDataFile()
for idx, val in enumerate(local):
    lname = val['name']  
    
    mobj = findByName(moneypl, lname)
    if(mobj):
        print(lname + ' ' + str(val['outs'])  + ' '  +str(val['ins']) )
        print(mobj['name'] + ' ' + str(mobj['outs'])  + ' '  +str(mobj['ins']) )
    else:
        print('brak ' + lname)
    print('')