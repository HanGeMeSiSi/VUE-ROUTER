import router from "../router";

function deepClone(obj,val){
    var val = val || {},
        toStr = Object.prototype.toString,
        arrType = '[object Array]';
    for (var item in obj){
        if(!obj.hasOwnProperty(item))continue;
        if(typeof obj[item] === 'object' && obj[item] !== null){
            if(toStr.call(obj[item]) === arrType){
                val[item] = []
            }else{
                val[item] = {}
            }
            deepClone(obj[item],val[item]);
        }else{
            val[item] = obj[item]
        }
    }
    return val;
}

function formatRouterTree(data){
    let parents = data.filter(p => p.pid === 0),
        children = data.filter(p => p.pid !== 0);
    
    return dataToTree(parents,children);

    function dataToTree(parents,children){
        parents.map(p=>{
            children.map((c,i)=>{
                if(p.id !== c.pid)return;
                let _c = deepClone(children,[]);
                _c.splice(i,1);
                dataToTree([c],_c);

                if(p.children){
                    p.children.push(c);
                }else{
                    p.children = [c]
                }
            })
        })
        return parents
    }
}

function generateRouter(userRouters){
    let newRouters = userRouters.map(r=>{
        let routes = {
            path:r.path,
            name:r.name,
            component:()=>import(`@/views/${r.name}`),
        }
        if(r.children){
            routes.children = generateRouter(r.children);
        }
        return routes;
    });
    return newRouters;
}


export {
    formatRouterTree,
    deepClone,
    generateRouter,
}