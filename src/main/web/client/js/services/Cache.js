const EXPIREED_OFFSET = 60 * 1000;


class Entry {
	
	#key;
	#data = null;
	#expireAfter;
	#expireAt;
	
	constructor(key, data, expireAfter = Number.MAX_SAFE_INTEGER){
		this.#key = key;		
		this.#data = data;
		this.#expireAfter = expireAfter;
		this.#expireAt = Date.now() + expireAfter;
	}
	
	get key(){
		return this.#key;
	}
	
	get data(){
		return this.#data
	}
	
	set data(data){		
		this.#data = data;
		this.#expireAt = Date.now() + this.#expireAfter;
	}	
	
	get expireAt(){
		return this.#expireAt;
	}	
	
	
}

class Cache{	
	#expireAfter = Number.MAX_SAFE_INTEGER;
	#entries = new Map();
	
	constructor(expireAfter){
		this.#expireAfter = expireAfter;
	}
	
	#isExpired(entry){
		return entry.expireAt < (Date.now() + EXPIREED_OFFSET);
	}
	
	#getEntry(key){
		const entry = this.#entries.get(key);
		if(!entry || this.#isExpired(entry)){
			this.delete(key);
			return null;
		}		
		return entry;
	}
	
	#getEntries(){
		const entries = Array.from(this.#entries.values);
		const result = new Array();
		for(const entry in entries)
			if(!this.#isExpired(entry))
				result.push(entry);
		
		return result;	
	}
	
	keys(){
		return this.#getEntries().map(entry => entry.key);
	}
	
	values(){
		return this.#getEntries().map(entry => entry.data);
	}
	
	get size(){
		return this.#entries.size
	}	
	
	get value(){
		return this.#entries.values
	}
	
	has(key){
		return this.#getEntry(key) != null;
	}	
	
	get(key){		
		const entry = this.#getEntry(key);		
		return entry ? entry.data : null;
	}
	
	set(key, value){
		const entry = this.#getEntry(key);
		if(entry != null)
			entry.data = value;
		else			
			this.#entries.set(key, new Entry(key, value, this.#expireAfter));
	}
	
	delete(key){
		this.#entries.delete(key);
	}
	
	clear(){
		this.#entries.clear();
	}
}


export default Cache;