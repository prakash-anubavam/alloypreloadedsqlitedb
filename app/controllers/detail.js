var args=arguments[0]||{};
if(args.$model){
	Ti.API.info('model ='+JSON.stringify(args.$model));
	var dataJson=args.$model.toJSON();
}else{
	alert('data not passed');
}