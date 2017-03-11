/**
 * Created by YY on 2016/11/26.
 */
(function () {
    angular.module('teacher.nameList.add')
        .controller('nameListAddCtrl', ctrl);
    function ctrl($scope, $log,$state, $mdDialog, headerFactory, TeacherCourse, teacherFactory) {
        var showAlert = teacherFactory.showToast;
        $scope.students = [];
        $scope.nameList=[
            {
                id:'' ,
                name:''
            }
        ];
        $log.info('nameListAddCtrl init');
        $scope.submit = function () {
            console.log("init sumit");
            var nameListArr = $scope.nameList.filter(function (each) {
                if(each.id==''||each.name=='')return false;
                else return true;
            });
            console.log(nameListArr);
            nameListArr=nameListArr.concat($scope.students);
            if(nameListArr.length==0)return showAlert('cuowu','没有读取到任何名单数据');
            $log.info(nameListArr);
            TeacherCourse.addStudentsIntoCourse(teacherFactory.getCurrentCourse()._id, nameListArr, function (error, res) {
                $log.info(res);
                if (error) {
                    return showAlert('错误', "添加名单失败,请重试" + error.status);
                }
                showAlert("成功", "成功添加\"" + res.scoresCreated + "\"名学生到\"" + teacherFactory.getCurrentCourse().name + "\"");
                $state.go('teacher.nameList');
            })

        };
        document.getElementById('xlsx').addEventListener('change', Account.handleFile, false);


    }
})();