# -*- coding: utf-8 -*-
import re, os, time, sys
import string, json
import urllib.request

def stripHtml(text):
    return re.compile(r'(<!--.*?-->|<[^>]*>)').sub('', text).replace('&raquo;','').strip()

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
        #print('bank:' + str(idx) + ' : ' + stripHtml(cols[0][1]))
        #print('c1:' + str(idx) + ' : ' + stripHtml(cols[1][1]))
        #print('c1:' + str(idx) + ' : ' + stripHtml(cols[2][1]))
        #print('c1:' + str(idx) + ' : ' + stripHtml(cols[3][1]))

# print(banks)
print(json.dumps(banks, indent=2))