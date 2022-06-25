{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
        pkgs.libuuid
        pkgs.python
        pkgs.ffmpeg
        pkgs.imagemagick  
        pkgs.wget
        pkgs.sudo
        pkgs.openssh
    ];
    env ={
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
  };
}
