export default {
    findEachMatch: function(regexp:RegExp, str:string):Array<string> {
        var sstr = str
        var matches: any[] = []
        var match = regexp.exec(sstr)
        while(match !== null){
            if(match[1] !== null){
                matches.push(match[1])
                sstr = sstr.replace(match[0], '')
            }
            match = regexp.exec(sstr)
        }
        return matches        
    },
    open: function(url, newTab){
        newTab = newTab || false
        var a = document.createElement('a')
        a.setAttribute('href', url)
        newTab ? a.setAttribute('target', '_blank') : null
        a.click()
    }
}