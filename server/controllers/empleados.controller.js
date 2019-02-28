const empleadoModel = require('../models/empleados');
const empleadosCtrl = {};

empleadosCtrl.getEmpleados = async (req,res) => {
    const empleados = await empleadoModel.find();
    res.json(empleados);
}

empleadosCtrl.createEmpleado = async (req,res) => {
   const empleado = new empleadoModel(req.body);
   await empleado.save();
   res.json({
       'status': 'Empleado guardado'
   });
}


empleadosCtrl.getEmpleado = async (req,res) => {
    // console.log(req.params.id);
    const empleado = await empleadoModel.findById(req.params.id);
    res.json(empleado);
}

empleadosCtrl.editEmpleado = async (req,res) => {
    const { id } = req.params;
    const empleado = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        oficina: req.body.oficina,
        salario: req.body.salario
    }
    await empleadoModel.findOneAndUpdate(id, {$set: empleado}, {new: true});
    res.json({
        status: 'Empleado actializado'
    });
}

empleadosCtrl.deleteEmpleado = async (req,res) => {
    await empleadoModel.findOneAndDelete(req.params.id);
    res.json({
        status: 'Empleado eliminado'
    });
}
module.exports = empleadosCtrl;