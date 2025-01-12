# a small macro to create qm files out of ts's

MACRO(FIND_LRELEASE)
  IF(NOT LRELEASE_EXECUTABLE AND NOT LRELEASE_NOT_FOUND)
    SET(QT_EXE "$ENV{QTDIR}/bin")
    MESSAGE(STATUS "Looking up lrelease (${QT_EXE})")
    FIND_PROGRAM(LRELEASE_EXECUTABLE lrelease
        PATHS ${QT_EXE}
        /usr/lib/${QT_EXTENSION}/bin
        /usr/bin
        NO_DEFAULT_PATH
    )

    IF(LRELEASE_EXECUTABLE) # search again under the name lrelease-qt4
      MESSAGE(STATUS "Found as (${LRELEASE_EXECUTABLE})")
    ELSE()
      FIND_PROGRAM(LRELEASE_EXECUTABLE lrelease-${QT_EXTENSION}
        PATHS ${QT_EXE} /usr/bin/
        NO_DEFAULT_PATH
      )
      IF(NOT LRELEASE_EXECUTABLE) # search again under the name lrelease-qt4
        MESSAGE(FATAL_ERROR "lrelease executable not found - ts files can't be processed")
        SET(LRELEASE_NOT_FOUND "1")     # to avoid double checking in one cmake run
      ENDIF() # search again under the name lrelease-qt4
    ENDIF()
    IF(LRELEASE_EXECUTABLE)
      MESSAGE(STATUS "lrelease found as ${LRELEASE_EXECUTABLE}")
    ENDIF()

  ENDIF()
ENDMACRO()
#
#
#
MACRO(INSTALL_I18N)
  IF(WIN32)
    SET(i18dir "${CMAKE_INSTALL_PREFIX}/${BIN_DIR}/${QT_EXTENSION}/i18n")
  ELSE()
    SET(i18dir "${CMAKE_INSTALL_PREFIX}/share/avidemux6/${QT_EXTENSION}/i18n")
  ENDIF()
  INSTALL(FILES ${ARGN} DESTINATION "${i18dir}" COMPONENT runtime)
ENDMACRO()
#
#
FUNCTION(COMPILE_MASK_TS_FILES ts_subdir prefix mask_sources)
  IF(LRELEASE_EXECUTABLE)
    FILE(GLOB ts_files ${ts_subdir}/${prefix}_*.ts)
    #MESSAGE(STATUS "While searching ${prefix} found ${ts_files}")
    FOREACH(ts_input ${ts_files})
      GET_FILENAME_COMPONENT(_in       ${ts_input} ABSOLUTE)
      GET_FILENAME_COMPONENT(_basename ${ts_input} NAME_WE)

      FILE(MAKE_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR})
      GET_FILENAME_COMPONENT(_out ${CMAKE_CURRENT_BINARY_DIR}/${_basename}.qm ABSOLUTE)

      ADD_CUSTOM_COMMAND(
                OUTPUT ${_out}
                COMMAND ${CMAKE_COMMAND}
                    -E echo
                    "Generating" ${_out} "from" ${_in}
                COMMAND ${LRELEASE_EXECUTABLE}
                    ${_in}
                    -qm ${_out}
                DEPENDS ${_in}
            )

      SET(qm_files ${qm_files} ${_out})
    ENDFOREACH()
    INSTALL_I18N(${qm_files})
    SET(${mask_sources}  ${qm_files} PARENT_SCOPE)
  ENDIF()
ENDFUNCTION()
#
#
#
FUNCTION(COMPILE_TS_FILES ts_subdir sources)
  FIND_LRELEASE()
  IF(QT5_FOUND OR QT6_FOUND)
    SET(pfix "qtbase")
  ELSE()
    SET(pfix "qt")
  ENDIF()
  SET(adm_sources "")
  COMPILE_MASK_TS_FILES(${ts_subdir} "avidemux" adm_sources)
  #MESSAGE(STATUS "Result 1= ${adm_sources}")
  SET(qt_sources "")
  COMPILE_MASK_TS_FILES(${ts_subdir} "${pfix}"    qt_sources)
  #MESSAGE(STATUS "Result 2= ${qt_sources}")
  SET(${sources} ${adm_sources} ${qt_sources} PARENT_SCOPE)
ENDFUNCTION()
